import './styles/App.css';
import { useLocation } from 'react-router-dom';
import GameCards from './components/GameCards';

function App() {
	const { state } = useLocation();
	return (
		<>
			{state && alert(`You solved it in ${state} seconds`)}
			<GameCards />
		</>
	);
}

export default App;
