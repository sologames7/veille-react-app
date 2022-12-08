import '@sass/content/articleList/articleList.scss';

import React, { useEffect, useState } from 'react';

import Article from './Article';

function DisplayArticles({ articles, tagSearched }) {
	return articles && articles.length !== 0 ? (
		<div className="articleList">
			<h2>Results for &quot;{tagSearched}&quot;</h2>
			{articles.map((article, index) => (
				<Article
					key={article.id}
					id={article.id}
					image={article.social_image}
					title={article.title}
					description={article.description}
					link={article.url}
					tags={article.tags}
					publishDate={article.readable_publish_date}
					author={article.user.name}
					authorWebsite={article.user.website_url}
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
