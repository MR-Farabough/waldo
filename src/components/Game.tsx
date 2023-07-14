import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import waldo from '../assets/waldo.jpg';
import wilma from '../assets/wilma.jpg';
import wizard from '../assets/wizard.jpg';
import '../styles/Game.css';
import supabase from '../config/supabaseClient';

const Game = () => {
	const navigate = useNavigate();
	const [, setUserSelection] = useState<number[]>([]);
	const [value, setValue] = useState<any>(null);
	const { state } = useLocation();
	const characterList = ['Waldo', 'Wilma', 'Wizard'];
	const gamePicture = document.querySelector('.game-left');

	const roundToThousandth = (num: number) => {
		return Math.round((num + Number.EPSILON) * 1000) / 1000;
	};

	function create(event: MouseEvent) {
		let square = document.createElement('div');
		square.classList.add('selector');
		square.style.position = 'absolute';
		square.style.left = event.clientX - 25 + 'px';
		square.style.top = event.clientY - 25 + 'px';
		document.body.appendChild(square);
	}

	const activateModal = (instruction: string) => {
		const div = document.createElement('div');
		div.classList.add('instruction-modal');
		div.style.backgroundColor = 'green';
		setTimeout(() => {
			document.querySelector('.instruction-modal')?.remove();
		}, 1000);
		if (instruction === 'win') {
			div.innerText = 'YOU WIN';
			const time = document.querySelector('.timer')?.innerHTML;
			setTimeout(() => {
				navigate('/', { state: time });
			}, 2000);
		} else if (instruction == 'correct') {
			div.innerText = 'Correct';
		} else if (instruction == 'miss') {
			div.style.backgroundColor = 'red';
			div.innerText = 'Incorrect';
		}
		document.querySelector('.game-right')?.appendChild(div);
	};

	const checkUserSelection = (
		characterChoice: string,
		choosenCords: number[],
		data: any[]
	) => {
		let comparisonData = undefined;
		if (characterChoice == 'Wilma') {
			comparisonData = data[0].cord;
		} else if (characterChoice == 'Waldo') {
			comparisonData = data[1].cord;
		} else {
			comparisonData = data[2].cord;
		}
		const newArr = comparisonData.split(' ');
		const checkOne = newArr[0] < choosenCords[0] && choosenCords[0] < newArr[1];
		const checkTwo = newArr[2] < choosenCords[1] && choosenCords[1] < newArr[3];
		const characterTexts = document.querySelectorAll('.character-text');
		if (checkOne && checkTwo) {
			characterTexts.forEach((nameEl) => {
				if (nameEl.innerHTML == characterChoice) {
					activateModal('correct');
					nameEl.innerHTML += '✅';
					if (
						characterTexts[0].innerHTML[
							characterTexts[0].innerHTML.length - 1
						] == '✅' &&
						characterTexts[1].innerHTML[
							characterTexts[1].innerHTML.length - 1
						] == '✅' &&
						characterTexts[2].innerHTML[
							characterTexts[2].innerHTML.length - 1
						] == '✅'
					) {
						activateModal('win');
					}
				}
			});
		}
		if (!checkOne || !checkTwo) {
			activateModal('miss');
		}

		// Check if every character name has a check mark
	};

	function removeSelection() {
		let div = document.querySelector('.selector');
		let div2 = document.querySelector('.character-dropdown');
		if (div && div2) {
			div.remove();
			div2.remove();
		}
	}

	useEffect(() => {
		const getData = async () => {
			const { data, error } = await supabase.from('locations').select();
			if (error) {
				console.log(error);
				setValue(null);
			}
			if (data) {
				console.log('success');
				setValue(data);
			}
		};
		getData();

		const getClickPosition = (e: any) => {
			if (gamePicture) {
				removeSelection();
				removeSelection();
				const rect = gamePicture.getBoundingClientRect();
				const xPosition = (e.clientX - rect.left) / rect.width;
				const yPosition = (e.clientY - rect.top) / rect.height;
				const userCords = [
					roundToThousandth(xPosition),
					roundToThousandth(yPosition),
				];
				setUserSelection(() => {
					const updatedSelection = [...userCords];
					create(e);
					createCharacterDropDown(e, updatedSelection);
					return updatedSelection;
				});
			}
		};

		if (gamePicture) gamePicture.addEventListener('click', getClickPosition);
	}, [gamePicture]);

	const createCharacterDropDown = (
		event: MouseEvent,
		userSelection: number[]
	) => {
		// Create blank div for character list
		let dropDown = document.createElement('div');
		dropDown.classList.add('character-dropdown');
		dropDown.style.position = 'absolute';
		dropDown.style.left = event.clientX + 25 + 'px';
		dropDown.style.top = event.clientY - 25 + 'px';
		document.body.appendChild(dropDown);
		// Add character list from array
		characterList.forEach((character) => {
			let characterBtn = document.createElement('button');
			characterBtn.classList.add('character');
			characterBtn.innerText = character;
			dropDown.appendChild(characterBtn);
		});
		// Event Listener for dropdown buttons
		const characterBtns = document.querySelectorAll('.character');
		characterBtns.forEach((btn) => {
			btn.addEventListener('click', () => {
				removeSelection();
				removeSelection();
				checkUserSelection(btn.innerHTML, userSelection, value);
			});
		});
	};

	return (
		<main className="main-game">
			<section className="game-left">
				<img className="game-picture" src={state.picture} alt="main-img" />
			</section>
			<section className="game-right">
				<div className="character-div">
					<img className="character-img" src={waldo} alt="waldo" />
					<p className="character-text">Waldo</p>
				</div>
				<div className="character-div">
					<img className="character-img" src={wilma} alt="wilma" />
					<p className="character-text">Wilma</p>
				</div>
				<div className="character-div">
					<img className="character-img" src={wizard} alt="wizard" />
					<p className="character-text">Wizard</p>
				</div>
			</section>
		</main>
	);
};

export default Game;
