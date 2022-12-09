import '@sass/content/article/article.scss';

import React, { useEffect, useState } from 'react';
import trash from '../assets/images/trashBlack.png';
import pen from '../assets/images/blackEdit.png';

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
	isArticlesPage,
	myArticleList,
	setMyArticleList,
}) {
	function deleteArticle(id) {
		let tempMyList = [...myArticleList];
		let res = [];
		let deletedArticle = {};
		tempMyList.forEach((article, index) => {
			if (article.id !== id) {
				res.push(article);
			} else {
				deletedArticle = article;
			}
		});
		setMyArticleList(res);
		return alert(`Votre article "${deletedArticle.title}" à bien été supprimé.`);
	}
	return (
		<div className="articleCard">
			<a href={link}>
				<img src={image} alt={`article: ${title}`} />
			</a>
			<h3>{title}</h3>
			<p>{description}</p>
			<p>
				<u>Tags:</u> <i>{tags}</i>
			</p>
			<a href={authorWebsite} target="_blank" className="author">
				By: <u>{author}</u>
			</a>
			<p className="publishDate">{publishDate}</p>
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
