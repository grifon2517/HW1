// import { useState } from 'react';

// import { styles } from './app.module.css';

// export const App = () => {
// 	const [value, setValue] = useState('');
// 	const [list, setList] = useState([]);
// 	const [error, setError] = useState('');

// 	const isValueValid = value.length >= 3;

// 	const onInputButtonClick = () => {
// 		const promptValue = prompt('Введите значение:');
// 		if (promptValue.length < 3) {
// 			setError('Введенное значение должно содержать минимум 3 символа');
// 		} else {
// 			setValue(promptValue);
// 			setError('');
// 		}
// 	};

// 	const onAddButtonClick = () => {
// 		if (isValueValid) {
// 			const updatedList = [...list, { id: Date.now(), value }];
// 			setList(updatedList);
// 			setValue('');
// 			setError('');
// 		}
// 	};

// 	return (
// 		<div className={styles.app}>
// 			<h1 className="page-heading">Ввод значения</h1>
// 			<p className="no-margin-text">
// 				Текущее значение
// 				<code>value:</code>
// 				<output className="current-value">{value}</output>
// 			</p>
// 			{error && (
// 				<div className="error">
// 					Введенное значение должно содержать минимум 3 символа
// 				</div>
// 			)}
// 			<div className="buttons-container">
// 				<button
// 					className={styles.button}
// 					onClick={() => {
// 						onInputButtonClick();
// 					}}
// 				>
// 					Ввести новое
// 				</button>
// 				<button
// 					className={styles.button}
// 					disabled={!isValueValid}
// 					onClick={() => {
// 						onAddButtonClick();
// 					}}
// 				>
// 					Добавить в список
// 				</button>
// 			</div>
// 			<div className="list-container">
// 				<h2 className="list-heading">Список:</h2>
// 				{list.length > 0 ? (
// 					<ul className="list">
// 						{list.map((item) => (
// 							<li className="list-item" key={item.id}>
// 								{item.value}
// 							</li>
// 						))}
// 					</ul>
// 				) : (
// 					<p className="no-margin-text">Нет добавленных элементов</p>
// 				)}
// 			</div>
// 		</div>
// 	);
// };
