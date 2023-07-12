import Card from './Card';

const GameCards = () => {
	const gamePictures = [['src/assets/main.jpg', 'The Pond']];
	const builtCards = gamePictures.map((game, index) => {
		return <Card title={game[1]} picture={game[0]} key={index} />;
	});
	return builtCards;
};

export default GameCards;
