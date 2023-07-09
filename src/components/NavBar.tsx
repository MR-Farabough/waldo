import '../styles/index.css';
import { useState } from 'react';

interface Props {
	title: string;
	gameSelection: string;
	timer: boolean;
}

const NavBar = ({ title, gameSelection, timer }: Props) => {
	let [time, setTime] = useState(0);
	const startTimer = () => {
		setTimeout(() => {
			setTime(time + 1);
		}, 1000);
		return time;
	};
	return (
		<div className="navBar">
			<h1 className="navText">{gameSelection}</h1>
			<h1 className="navText">{title}</h1>
			{timer ? <h1 className="navText">{startTimer()}</h1> : <h1></h1>}
		</div>
	);
};

export default NavBar;
