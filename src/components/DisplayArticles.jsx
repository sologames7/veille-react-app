import '@sass/content/articleList/articleList.scss';

import React, { useEffect, useState } from 'react';

import Article from './Article';

function DisplayArticles({ articles }) {
	return (
		articles && (
			<div className="articleList">
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
					/>
				))}
			</div>
		)
	);
}

export default DisplayArticles;
