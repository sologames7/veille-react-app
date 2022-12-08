import '@sass/content/filters/filters.scss';

import React from 'react';

function DisplayTags({ fetchedArticles, tagListForFilter, setTagListForFilter }) {
	const allTagsNotUnique = [];
	fetchedArticles.forEach((article) => {
		const tags = article.tag_list;
		allTagsNotUnique.push(...tags);
	});
	const uniqueTags = [...new Set(allTagsNotUnique)].sort();

	function addToTagsState(tag) {
		if (tagListForFilter.includes(tag)) {
			const tempsTagList = [...tagListForFilter];
			const tagIndex = tempsTagList.indexOf(tag);
			if (tagIndex !== -1) {
				tempsTagList.splice(tagIndex, 1);
			}
			setTagListForFilter(tempsTagList);
		} else {
			setTagListForFilter([...tagListForFilter, tag]);
		}
	}
	function resetTags() {
		setTagListForFilter([]);
	}

	return (
		<details>
			<summary>Show tags</summary>
			<div className="tagsContainer">
				<button id="resetTags" onClick={() => resetTags()}>
					Reset
				</button>
				{uniqueTags.map((tag, index) => (
					<button
						key={index}
						className={`tagButton ${
							tagListForFilter.includes(tag) ? 'selectedTag' : ''
						}`}
						onClick={() => addToTagsState(tag)}>
						{tag}
					</button>
				))}
			</div>
		</details>
	);
}

export default DisplayTags;
