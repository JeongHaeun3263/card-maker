import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState([
		{
			id: '1',
			name: 'Grace',
			company: 'Google',
			theme: 'dark',
			title: 'Web Developer',
			email: 'grace@gmail.com',
			message: 'go for it',
			fileName: 'grace',
			fileURL: null,
		},
		{
			id: '2',
			name: 'Grace222',
			company: 'Google',
			theme: 'light',
			title: 'Web Developer',
			email: 'grace222@gmail.com',
			message: 'go for it',
			fileName: 'grace222',
			fileURL: null,
		},
		{
			id: '3',
			name: 'Grace333',
			company: 'Google',
			theme: 'colorful',
			title: 'Web Developer',
			email: 'grace333@gmail.com',
			message: 'go for it',
			fileName: 'grace333',
			fileURL: 'grace333.png',
		},
	]);
	const history = useHistory();

	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (!user) {
				history.push('/');
			}
		});
	});
	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor cards={cards} />
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
