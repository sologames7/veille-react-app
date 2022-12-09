import '@sass/content/articleList/articleList.scss';

import React, { useEffect, useState } from 'react';

import Article from './Article';

function DisplayArticles({
	articles,
	tagSearched,
	isArticlesPage,
	myArticleList,
	setMyArticleList,
	setCopyArticles,
}) {
	console.log(articles);
	console.log(myArticleList);
	return articles && articles.length !== 0 ? (
		<div className="articleList">
			<h2>Results for &quot;{tagSearched}&quot;</h2>
			{articles.map((article, index) => (
				<Article
					key={index}
					data={article}
					isArticlesPage={isArticlesPage ?? false}
					articles={articles ?? false}
					setMyArticleList={setMyArticleList ?? false}
					setCopyArticles={setCopyArticles ?? false}
				/>
			))}
		</div>
	) : (
		<p className="searcheError">
			Oops! There is no result for &quot;{tagSearched}&quot;
		</p>
	);
}

export default DisplayArticles;
