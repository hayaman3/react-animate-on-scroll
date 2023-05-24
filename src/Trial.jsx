import { InView } from 'react-intersection-observer';
import './trial.css';

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
				<div>
					<h1>Title: {data.title}</h1>
					<h2 className="details">Details: {data.details}</h2>
				</div>
			))}
		</>
	);
}

function Component() {
	return (
		<InView as="div" onChange={inView => console.log('Inview:', inView)}>
			<Card />
			<div className={inView ? 'seen' : ''}>asdsadsa</div>
		</InView>
	);
}

export default Component;
