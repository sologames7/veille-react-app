import '@sass/content/article/article.scss';

import React, { useEffect, useState } from 'react';

import pen from '../assets/images/blackEdit.png';
import trash from '../assets/images/trashBlack.png';

function Article({ data, isArticlesPage, articles, setMyArticleList, setCopyArticles }) {
	const {
		id,
		social_image,
		title,
		description,
		link,
		tags,
		readable_publish_date,
		user,
		authorWebsite,
	} = data;
	function deleteArticle(id) {
		console.log('delete article', id);
		const tempMyList = [...articles];
		const res = [];
		let deletedArticle = {};
		tempMyList.forEach((article, index) => {
			if (article.id !== id) {
				res.push(article);
			} else {
				deletedArticle = article;
			}
		});
		setMyArticleList(res);
		setCopyArticles(res);
		return alert(`Votre article "${deletedArticle.title}" à bien été supprimé.`);
	}
	return (
		<div className="articleCard">
			<a href={link}>
				<img src={social_image} alt={`article: ${title}`} />
			</a>
			<h3>{title}</h3>
			<p>{description}</p>
			<p>
				<u>Tags:</u> <i>{tags}</i>
			</p>
			<a href={authorWebsite} target="_blank" className="author" rel="noreferrer">
				By: <u>{user.name}</u>
			</a>
			<p className="publishDate">{readable_publish_date}</p>
			{isArticlesPage ? (
				<div className="actionContainer">
					<button onClick={() => deleteArticle(id)}>
						<img src={trash} alt="DELETE" />
					</button>
					<button>
						<img src={pen} alt="EDIT" />
					</button>
				</div>
			) : null}
		</div>
	);
}

export default Article;
