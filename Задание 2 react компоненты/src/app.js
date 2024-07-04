import React, { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const onClickNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === steps.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const onClickPrev = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? steps.length - 1 : prevIndex - 1,
		);
	};

	const onClickRestart = () => {
		setActiveIndex(0);
	};

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li
								key={parseInt(step.id)}
								className={`${styles['steps-item']} ${activeIndex === index ? styles.active : ''} ${index < activeIndex ? styles.done : ''}`}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{parseInt(step.id)}
								</button>
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={isFirstStep}
							onClick={isFirstStep ? null : onClickPrev}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={isLastStep ? onClickRestart : onClickNext}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
