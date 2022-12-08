import '@sass/content/article/article.scss';

import React, { useEffect, useState } from 'react';

function Article({
	id,
	image,
	title,
	description,
	link,
	tags,
	publishDate,
	author,
	authorWebsite,
}) {
	return (
		<a href={link} className="articleCard">
			<img src={image} alt={`article: ${title}`} />
			<h3>{title}</h3>
			<p>{description}</p>
			<p>
				<u>Tags:</u> <i>{tags}</i>
			</p>
			<p className="author">
				By: <u>{author}</u>
			</p>
			<p className="publishDate">{publishDate}</p>
		</a>
	);
}

export default Article;
