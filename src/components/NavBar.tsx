import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import { useEffect, useState } from 'react';

interface Props {
	title: string;
	gameSelection: string;
	timer: boolean;
}

const NavBar = ({ title, gameSelection, timer }: Props) => {
	const [path, setPath] = useState(window.location.pathname);
	let [time, setTime] = useState(0);
	const startTimer = () => {
		setTimeout(() => {
			setTime(time + 1);
		}, 1000);
		return time;
	};
	useEffect(() => {
		setPath(window.location.pathname);
		startTimer();
	}, [window.location.pathname]);
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/');
	};
	if (path === '/game') {
		gameSelection = 'The Pond';
		startTimer();
	} else {
		gameSelection = '';
		time = 0;
		document.querySelector('.selector')?.remove();
		document.querySelector('.character-dropdown')?.remove();
	}

	return (
		<nav className="navBar">
			<h1 className="navText">{gameSelection}</h1>
			<h1 onClick={handleClick} className="navText home">
				{title}
			</h1>
			{timer ? <h1 className="navText timer">{time}</h1> : <h1></h1>}
		</nav>
	);
};

export default NavBar;
