import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Game.css';

const Game = () => {
	const { state } = useLocation();
	const roundToThousandth = (num: number) => {
		return Math.round((num + Number.EPSILON) * 1000) / 1000;
	};
	useEffect(() => {
		const getClickPosition = (e: any) => {
			const gamePicture = document.querySelector('.game-left');
			if (gamePicture) {
				const rect = gamePicture.getBoundingClientRect();
				const xPosition = (e.clientX - rect.left) / rect.width;
				const yPosition = (e.clientY - rect.top) / rect.height;
				console.log(roundToThousandth(xPosition), roundToThousandth(yPosition));
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
				<p>character one</p>
				<p>character two</p>
				<p>character three</p>
				<p>character four</p>
			</section>
		</main>
	);
};

export default Game;
