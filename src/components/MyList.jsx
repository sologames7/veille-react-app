import '@sass/content/myList/myListPage.scss';

import React, { useEffect, useState } from 'react';

import submitFormImage from '../assets/images/loupe.png';
import data from '../data/myListTemp';
import useLocalStorage from '../hooks/useLocalstorage';
import DisplayArticles from './DisplayArticles';
import Filters from './Filters';
import Footer from './Footer';
import FormMyArticles from './FormMyArticles';
import Header from './Header';

function MyList() {
	const [titleToSearch, setTitleToSearch] = useState('');
	const [myArticleList, setMyArticleList] = useLocalStorage('myList', data);
	const [copyArticles, setCopyArticles] = useState([...myArticleList]);
	const [searchbar, setSearchbar] = useState('');
	const [tagListForFilter, setTagListForFilter] = useState([]);
	const [isOpenForm, setIsOpenForm] = useState(false);
	const [formFields, setFormFields] = useState([
		'',
		'',
		new Date('11-09-2003'),
		'',
		'',
		'',
		'',
	]);

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

	useEffect(() => {
		const articlesFiltred = [];
		myArticleList.forEach((article) => {
			if (article.title.toUpperCase().includes(titleToSearch.toUpperCase())) {
				articlesFiltred.push(article);
			}
		});
		setCopyArticles(articlesFiltred);
	}, [titleToSearch]);

	function changeField(event) {
		const tempFieldName = event.target.name;
		const key = event.target.value;
		if (tempFieldName === 'title') {
			setSearchbar(key);
		}
		setTitleToSearch(key);
	}

	function submitForm(event, title) {
		event.preventDefault();
	}

	document.addEventListener('keydown', (event) => {
		if (event.keyCode === 27 && isOpenForm) {
			setIsOpenForm(false);
		}
	});

	return (
		<>
			<FormMyArticles
				isOpenForm={isOpenForm}
				setIsOpenForm={setIsOpenForm}
				formFields={formFields}
				setFormFields={setFormFields}
				copyArticles = {copyArticles}
				setCopyArticles = {setCopyArticles}
				myArticleList = {myArticleList}
				setMyArticleList ={setMyArticleList}
			/>
			<Header />
			<h1>My list</h1>
			<div className="searchAndNew">
				<form
					className="searchbar"
					onSubmit={(event) => submitForm(event, searchbar)}>
					<input
						type="text"
						name="title"
						value={searchbar}
						placeholder="Search for an article"
						onChange={(event) => changeField(event)}
					/>

					<input
						className="loupe"
						type="image"
						src={submitFormImage}
						name="submit"
						alt="Submit Form"
					/>
				</form>
				<button
					className="buttonNew"
					onClick={() =>
						isOpenForm ? setIsOpenForm(false) : setIsOpenForm(true)
					}>
					New article
				</button>
			</div>
			<Filters
				copyArticles={copyArticles}
				setCopyArticles={setCopyArticles}
				fetchedArticles={myArticleList}
				tagListForFilter={tagListForFilter}
				setTagListForFilter={setTagListForFilter}
			/>
			<DisplayArticles
				articles={copyArticles}
				tagSearched={titleToSearch}
				isArticlesPage
				setMyArticleList={setMyArticleList}
				setCopyArticles={setCopyArticles}

				// myArticleList={myArticleList}
			/>
			<Footer />
		</>
	);
}

export default MyList;
