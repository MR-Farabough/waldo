import { useLocation } from 'react-router-dom';
import '../styles/Game.css';
import NavBar from './NavBar';

const Game = () => {
	const { state } = useLocation();
	console.log(state);
	<NavBar title="Where's Waldo" gameSelection={state.title} timer={true} />;

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
