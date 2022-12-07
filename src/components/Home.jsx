import '@sass/content/home/home.scss';

import React, { useEffect, useState } from 'react';

import submitFormImage from '../assets/images/loupe.png';
import DisplayArticles from './DisplayArticles';
import Header from './Header';

function Home() {
	const [tagToSearch, setTagToSearch] = useState('css');
	const [fetchedArticles, setFetchedArticles] = useState([]);
	const [tagSearchbar, setTagSearchbar] = useState('');

	useEffect(() => {
		fetch(`https://dev.to/api/articles?tag=${tagToSearch}`)
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((data) => setFetchedArticles(data));
	}, [tagToSearch]);

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
			<form
				className="searchbar"
				onSubmit={(event) => submitForm(event, tagSearchbar)}>
				{/* {!fields.titleValid && (
					<p className="notValid">Title must be not empty and max 50 char</p>
				)} */}
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
			<DisplayArticles articles={fetchedArticles} tagSearched={tagToSearch} />
		</>
	);
}

export default Home;
