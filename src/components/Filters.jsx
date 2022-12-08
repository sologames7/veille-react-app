import '@sass/content/filters/filters.scss';

import React, { useState } from 'react';

import DisplayTags from './DisplayTags';

function Filters({
	copyArticles,
	setCopyArticles,
	fetchedArticles,
	tagListForFilter,
	setTagListForFilter,
}) {
	const [isNewerFirst, setIsNewerFirst] = useState(true);
	function clickOnSortByDateButton() {
		const res = [...copyArticles];
		const domButton = document.getElementById('sortByDateButton');
		if (isNewerFirst) {
			res.sort(function (a, b) {
				return new Date(b.published_timestamp) - new Date(a.published_timestamp);
			});
			setIsNewerFirst(false);
			domButton.innerHTML = 'Sort by : newer first &darr;';
		} else {
			res.sort(function (a, b) {
				return new Date(a.published_timestamp) - new Date(b.published_timestamp);
			});
			setIsNewerFirst(true);
			domButton.innerHTML = 'Sort by : older first &uarr;';
		}
		setCopyArticles(res);
	}

	return (
		<div className="filters">
			<h2>Filters: </h2>
			<button id="sortByDateButton" onClick={clickOnSortByDateButton}>
				Sort by : date
			</button>
			<DisplayTags
				copyArticles={copyArticles}
				setCopyArticles={setCopyArticles}
				fetchedArticles={fetchedArticles}
				tagListForFilter={tagListForFilter}
				setTagListForFilter={setTagListForFilter}
			/>
		</div>
	);
}

export default Filters;
