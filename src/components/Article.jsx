import '@sass/content/article/article.scss';

import React, { useEffect, useState } from 'react';

function Article({ id, image, title, description, link, tags, publishDate }) {
	return (
		<a href={link} className="articleCard">
			<img src={image} alt={`image of article: ${id}`} />
			<h2>{title}</h2>
			<p>{description}</p>
			<p>
				<u>Tags:</u> <i>{tags}</i>
			</p>
			<p className="publishDate">{publishDate}</p>
		</a>
	);
}

export default Article;
