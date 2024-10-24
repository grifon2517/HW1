// Декларативный
import { createElement } from 'react';
// import logo from './logo.svg';
import './app.module.css';

// Императивный
export const App = () => {
	// const year = new Date().getFullYear();
	// Декларативный
	return createElement(
		'div',
		{ className: 'app' },
		createElement('h1', { className: 'page-heading' }, 'Ввод значения'),
		createElement(
			'p',
			{ className: 'no-margin-text' },
			'Текущее значение',
			createElement('code', null, 'value'),
			': "',
			createElement('output', { className: 'current-value' }, ''),
		),
		createElement(
			'div',
			{ className: 'error' },
			'Введенное значение должно содержать минимум 3 символа',
		),
		createElement(
			'div',
			{ className: 'buttons-container' },
			createElement('button', { className: 'button' }, 'Ввести новое'),
			createElement(
				'button',
				{ className: 'button', disabled: true },
				'Добавить в список',
			),
		),
		createElement(
			'div',
			{ className: 'list-container' },
			createElement('h2', { className: 'list-heading' }, 'Список:'),
			createElement(
				'p',
				{ className: 'no-margin-text' },
				'Нет добавленных элементов',
			),
			createElement(
				'ul',
				{ className: 'list' },
				createElement('li', { className: 'list-item' }, 'Первый элемент'),
			),
		),
	);
};

// export const App = () => {
// 	const year = new Date().getFullYear();
// 	// Декларативный
// 	return createElement(
// 		'div',
// 		{ className: 'App' },
// 		createElement(
// 			'header',
// 			{ className: 'App-header' },
// 			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
// 			createElement(
// 				'p',
// 				null,
// 				`Edit`,
// 				createElement('code', null, `src / App.js`),
// 				`and save to reload.`,
// 			),
// 			createElement(
// 				'a',
// 				{
// 					className: 'App-link',
// 					href: 'https://reactjs.org',
// 					target: '_blank',
// 					rel: 'noopener noreferrer',
// 				},
// 				`Learn React`,
// 			),
// 			createElement('div', null, year),
// 		),
// 	);

// };
