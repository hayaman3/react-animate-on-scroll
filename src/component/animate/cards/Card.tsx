import { useInView } from 'react-intersection-observer';
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
	const { ref, inView } = useInView({
		threshold: 0,
	});

	return (
		<>
			{cardData.map(data => (
				<div>
					<h1
						ref={ref}
						className={`transition-opacity ${inView ? 'red' : 'blue'}`}>
						Title: {data.title}
					</h1>
					<h2 className="details">Details: {data.details}</h2>
				</div>
			))}
		</>
	);
}

export default Card;
