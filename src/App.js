import { createElement, useState } from 'react';

import './app.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const isValueValid = value.length >= 3;

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение:');
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const onAddButtonClick = () => {
		if (isValueValid) {
			const updatedList = [...list, { id: Date.now(), value }];
			setList(updatedList);
			setValue('');
			setError('');
		}
	};

	return createElement(
		'div',
		{ className: 'app' },
		createElement('h1', { className: 'page-heading' }, 'Ввод значения'),
		createElement(
			'p',
			{ className: 'no-margin-text' },
			'Текущее значение',
			createElement('code', null, ' value:'),
			'',
			createElement('output', { className: 'current-value' }, value),
		),
		error &&
			createElement(
				'div',
				{ className: 'error' },
				'Введенное значение должно содержать минимум 3 символа',
			),
		createElement(
			'div',
			{ className: 'buttons-container' },
			createElement(
				'button',
				{ className: 'button', onClick: onInputButtonClick },
				'Ввести новое',
			),
			createElement(
				'button',
				{
					className: 'button',
					disabled: !isValueValid,
					onClick: onAddButtonClick,
				},
				'Добавить в список',
			),
		),
		createElement(
			'div',
			{ className: 'list-container' },
			createElement('h2', { className: 'list-heading' }, 'Список:'),
			// Если список не пуст, отображаем его элементы, иначе сообщение о пустом списке
			list.length > 0
				? createElement(
						'ul',
						{ className: 'list' },
						list.map(
							(item) =>
								createElement(
									'li',
									{ key: item.id, className: 'list-item' },
									item.value,
								), // Использование состояния list
						),
					)
				: createElement(
						'p',
						{ className: 'no-margin-text' },
						'Нет добавленных элементов',
					),
		),
	);
};
