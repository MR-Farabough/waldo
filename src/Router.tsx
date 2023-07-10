import { Routes, Route } from 'react-router-dom';
import App from './App';
import Game from './components/Game';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Router = () => {
	let [timer, setTimer] = useState<boolean>(false);
	let [gameSelection, setGameSelection] = useState<string>('');
	// Update NavBar Content
	const navigate = useNavigate();
	setTimeout(() => {
		document.querySelectorAll('.card').forEach((card) => {
			card.addEventListener('click', () => {
				setTimer(true);
				card.textContent ? setGameSelection(card.textContent) : null;
				navigate('/game', {
					state: {
						title: card.textContent,
						picture: card.children[0].getAttribute('src'),
					},
				});
			});
		});
	});

	return (
		<>
			<NavBar
				title="Where's Waldo"
				gameSelection={gameSelection}
				timer={timer}
			/>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/game" element={<Game />} />
			</Routes>
		</>
	);
};

export default Router;
