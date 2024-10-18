// Декларативный
import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';

// Императивный
export const App = () => {
	const year = new Date().getFullYear();
	// Декларативный
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement(
				'p',
				null,
				`Edit`,
				createElement('code', null, `src / App.js`),
				`and save to reload.`,
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				`Learn React`,
			),
			createElement('div', null, year),
		),
	);
	// return (
	// Декларативный
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload. 3
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 			<div>{year}</div>
	// 		</header>
	// 	</div>
	// );
};
