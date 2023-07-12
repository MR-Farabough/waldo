import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import waldo from '../assets/waldo.jpg';
import wilma from '../assets/wilma.jpg';
import wizard from '../assets/wizard.jpg';
import '../styles/Game.css';

const Game = () => {
	const { state } = useLocation();
	const characterList = ['Waldo', 'Wilma', 'Wizard'];
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

	function createCharacterDropDown(event: MouseEvent) {
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
		const characterBtns = document.querySelectorAll('.character');
		characterBtns.forEach((btn) => {
			btn.addEventListener('click', () => {
				removeSelection();
				//TODO Handle Logic for character selection
			});
		});
	}

	function removeSelection() {
		let div = document.querySelector('.selector');
		let div2 = document.querySelector('.character-dropdown');
		if (div && div2) {
			div.remove();
			div2.remove();
		}
	}

	useEffect(() => {
		const getClickPosition = (e: any) => {
			const gamePicture = document.querySelector('.game-left');
			if (gamePicture) {
				removeSelection();
				const rect = gamePicture.getBoundingClientRect();
				const xPosition = (e.clientX - rect.left) / rect.width;
				const yPosition = (e.clientY - rect.top) / rect.height;
				console.log(roundToThousandth(xPosition), roundToThousandth(yPosition));
				create(e);
				createCharacterDropDown(e);
			}
		};
		const gamePicture = document.querySelector('.game-left');
		if (gamePicture) {
			gamePicture.addEventListener('click', getClickPosition);
		}
		// Cleanup function to remove the event listener when the component unmounts
		return () => {
			if (gamePicture) {
				gamePicture.removeEventListener('click', getClickPosition);
			}
		};
	}, []);
	return (
		<main className="main-game">
			<section className="game-left">
				<img className="game-picture" src={state.picture} alt="main-img" />
			</section>
			<section className="game-right">
				<div className="character-div">
					<img className="character-img" src={waldo} alt="waldo" />
					<p>Waldo</p>
				</div>
				<div className="character-div">
					<img className="character-img" src={wilma} alt="wilma" />
					<p>Wilma</p>
				</div>
				<div className="character-div">
					<img className="character-img" src={wizard} alt="wizard" />
					<p>Wizard</p>
				</div>
			</section>
		</main>
	);
};

export default Game;
