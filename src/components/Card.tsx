import '../styles/Card.css';

interface Props {
	title: string;
	picture: string;
}

const Card = ({ title, picture }: Props) => {
	return (
		<div className="card">
			<img className="preview" src={picture} alt="Game-Picture" />
			<h1 className="card-title">{title}</h1>
		</div>
	);
};

export default Card;
