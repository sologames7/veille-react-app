import '@sass/content/home/home.scss';

import React, { useEffect, useState } from 'react';

import submitFormImage from '../assets/images/loupe.png';
import DisplayArticles from './DisplayArticles';
import Filters from './Filters';
import Header from './Header';
import Footer from './Footer';

function Home() {
	const [tagToSearch, setTagToSearch] = useState('');
	const [fetchedArticles, setFetchedArticles] = useState([]);
	const [copyArticles, setCopyArticles] = useState([]);
	const [tagSearchbar, setTagSearchbar] = useState('');
	const [tagListForFilter, setTagListForFilter] = useState([]);

	useEffect(() => {
		fetch(`https://dev.to/api/articles?tag=${tagToSearch}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setFetchedArticles(data);
				setCopyArticles(data);
			});
	}, [tagToSearch]);

	useEffect(() => {
		const articlesAfterFilters = [];
		fetchedArticles.forEach((article) => {
			const res = tagListForFilter.every(function (e) {
				return article.tag_list.includes(e);
			});

			if (res) {
				articlesAfterFilters.push(article);
			}
		});
		console.log(articlesAfterFilters);
		setCopyArticles(articlesAfterFilters);
	}, [tagListForFilter]);

	function changeField(event) {
		const tempFieldName = event.target.name;
		const test = event.target.value;
		if (tempFieldName === 'tag') {
			setTagSearchbar(test);
		}
	}
	function submitForm(event, tag) {
		event.preventDefault();
		setTagToSearch(tag);
		console.log(tagToSearch);
		console.log('sumbit! and field = ', tag);
	}

	return (
		<>
			<Header />
			<h1>Welcome.</h1>
			<form
				className="searchbar"
				onSubmit={(event) => submitForm(event, tagSearchbar)}>
				<input
					type="text"
					name="tag"
					value={tagSearchbar}
					placeholder="Search for a tag"
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
			<Filters
				copyArticles={copyArticles}
				setCopyArticles={setCopyArticles}
				fetchedArticles={fetchedArticles}
				tagListForFilter={tagListForFilter}
				setTagListForFilter={setTagListForFilter}
			/>
			<DisplayArticles articles={copyArticles} tagSearched={tagToSearch} />
			<Footer />
		</>
	);
}

export default Home;
