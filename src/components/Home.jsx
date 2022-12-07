import '@sass/content/home/home.scss';

import React, { useEffect, useState } from 'react';

import logo from '../assets/images/logo.png';
import DisplayArticles from './DisplayArticles';
import Header from './Header';

function Home() {
	const tag = 'react';
	const [fetchedArticles, setFetchedArticles] = useState([]);
	useEffect(() => {
		fetch(`https://dev.to/api/articles?tag=${tag}`)
			.then((response) => response.json())
			.then((data) => setFetchedArticles(data));
	}, []);

	return (
		<>
			<Header />
			<DisplayArticles articles={fetchedArticles} />
		</>
	);
}

export default Home;
