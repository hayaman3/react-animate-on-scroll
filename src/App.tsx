import Space from './component/space/Space';
import Animate from './component/animate/Animate';

function App() {
	return (
		<div className="App">
			<Space />
			<Animate />
		</div>
	);
}

export default App;

// import React, { useRef } from 'react';
// // import './style.css';
// // import { useInView } from './useInView';
// import useInView from './useInView';

// export default function App() {
// 	const firstParagraphRef = useRef(null);
// 	const secondParagraphRef = useRef(null);

// 	const observedElements = useInView([firstParagraphRef, secondParagraphRef]);

// 	return (
// 		<div>
// 			<h1 style={{ position: 'fixed', top: 0, background: '#fff', margin: 0 }}>
// 				Elements currently in view:
// 				{Object.keys(observedElements).map(key => (
// 					<span>{observedElements[key].isInView ? key : ''}</span>
// 				))}
// 			</h1>
// 			<div style={{ marginTop: '50px' }}>
// 				<p>Please scroll way down to the bottom of the page.</p>
// 				<div style={{ height: '1000px' }} />
// 				<p ref={firstParagraphRef} data-myProperty="First element">
// 					I am way down the page.
// 				</p>
// 				<div style={{ height: '500px' }} />
// 				<p ref={secondParagraphRef} data-myProperty="Second element">
// 					I am way down the page.
// 				</p>
// 			</div>
// 		</div>
// 	);
// }
