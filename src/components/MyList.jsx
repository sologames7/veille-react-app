import '@sass/content/myList/myListPage.scss';

import React, { useEffect, useState } from 'react';

import submitFormImage from '../assets/images/loupe.png';
import DisplayArticles from './DisplayArticles';
import Filters from './Filters';
import Header from './Header';
import Footer from './Footer';
import data from '../data/myListTemp';
import useLocalStorage from '../hooks/useLocalstorage';
// id aléatoire : Math.random().toString(36).slice.(2)
function MyList() {
	const [tagToSearch, setTagToSearch] = useState('');
	const [myArticleList, setMyArticleList] = useLocalStorage('myList', data);
	const [copyArticles, setCopyArticles] = useState([]);
	const [tagSearchbar, setTagSearchbar] = useState('');
	const [tagListForFilter, setTagListForFilter] = useState([]);

	useEffect(() => {
		const articlesAfterFilters = [];
		myArticleList.forEach((article) => {
			const res = tagListForFilter.every(function (e) {
				return article.tag_list.includes(e);
			});

			if (res) {
				articlesAfterFilters.push(article);
			}
		});
		setCopyArticles(articlesAfterFilters);
	}, [tagListForFilter]);

	return (
		<>
			<Header />
			<h1>My list</h1>
			<Filters
				copyArticles={copyArticles}
				setCopyArticles={setCopyArticles}
				fetchedArticles={myArticleList}
				tagListForFilter={tagListForFilter}
				setTagListForFilter={setTagListForFilter}
			/>
			<DisplayArticles
				articles={copyArticles}
				tagSearched={tagToSearch}
				isArticlesPage={true}
				setMyArticleList={setMyArticleList}
				myArticleList={myArticleList}
			/>
			<Footer />
		</>
	);
}

export default MyList;
