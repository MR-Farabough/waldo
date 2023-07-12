import { useNavigate } from 'react-router-dom';
import '../styles/index.css';
import { useState } from 'react';

interface Props {
	title: string;
	gameSelection: string;
	timer: boolean;
}

const NavBar = ({ title, gameSelection, timer }: Props) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/');
	};
	let [time, setTime] = useState(0);
	const startTimer = () => {
		setTimeout(() => {
			setTime(time + 1);
		}, 1000);
		return time;
	};
	return (
		<nav className="navBar">
			<h1 className="navText">{gameSelection}</h1>
			<h1 onClick={handleClick} className="navText home">
				{title}
			</h1>
			{timer ? <h1 className="navText">{startTimer()}</h1> : <h1></h1>}
		</nav>
	);
};

export default NavBar;
