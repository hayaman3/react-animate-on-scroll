import './cards.css';

const cardData = [
	{
		title: 'CARD ONE',
		details: 'Details one',
	},
	{
		title: 'CARD TWO',
		details: 'Details two',
	},
	{
		title: 'CARD THREE',
		details: 'Details three',
	},
	{
		title: 'CARD FOUR',
		details: 'Details four',
	},
	{
		title: 'CARD FIVE',
		details: 'Details five',
	},
];

function Card() {
	return (
		<>
			{cardData.map(data => (
				<div className="card">
					<h1 className="title">Title: {data.title}</h1>
					<h2 className="details">Details: {data.details}</h2>
				</div>
			))}
		</>
	);
}

export default Card;
