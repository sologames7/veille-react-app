import React, { useEffect, useState } from 'react';

function FormMyArticles({
	isOpenForm,
	setIsOpenForm,
	setFormFields,
	formFields,
	myArticleList,
	setMyArticleList,
	copyArticles,
	setCopyArticles,
}) {
	function changeFields(event) {
		const fieldName = event.target.name;
		const fieldValue = event.target.value;
		let tempFields = [...formFields];
		if (fieldName === 'title') {
			tempFields[0] = fieldValue;
		}
		if (fieldName === 'author') {
			tempFields[1] = fieldValue;
		}
		if (fieldName === 'description') {
			tempFields[3] = fieldValue;
		}
		if (fieldName === 'tag') {
			tempFields[4] = fieldValue;
		}
		if (fieldName === 'image') {
			tempFields[5] = fieldValue;
		}
		if (fieldName === 'link') {
			tempFields[6] = fieldValue;
		}


		setFormFields(tempFields);
	}

	function submitForm(event) {
		event.preventDefault();
		setIsOpenForm(false);
		let id = Math.random().toString(36).slice(2);
		let date = new Date();

		if (formFields[5] == '') {
			let tempField = [...formFields];
			tempField[5] =
				'https://openseauserdata.com/files/219f9f30d09b04dc263952dd5bb7b6d7.jpg';
			setFormFields(tempField);
			console.log(tempField);
		}

		let articleToAdd = {
			id: id,
			title: formFields[0],
			description: formFields[3],
			tag_list: [formFields[4]],
			social_image: formFields[5],
			url: formFields[6],
			tags: formFields[4],
			readable_publish_date: date.toString().slice(0,16),
			user: { name: formFields[1] },
		};
		let tempList = [...myArticleList];
		tempList.push(articleToAdd);
		setCopyArticles(tempList);
		setMyArticleList(tempList);
	}

	return (
		<>
			<div
				className={`formSLideFromBottom ${
					isOpenForm ? 'openForm' : 'closeForm'
				}`}>
				<form className="articleForm" onSubmit={(event) => submitForm(event)}>
					<p>New Article</p>
					<input
						required
						name="title"
						type="text"
						placeholder="title"
						value={formFields[0]}
						onChange={(event) => changeFields(event)}
					/>
					<input
						required
						name="author"
						type="text"
						placeholder="author"
						value={formFields[1]}
						onChange={(event) => changeFields(event)}
					/>
					{/* <input
						hidden
						name="publish_date"
						type="date"
						value={formFields[2]}
						onChange={(event) => changeFields(event)}
					/> */}
					<input
						name="description"
						type="text"
						placeholder="description"
						value={formFields[3]}
						onChange={(event) => changeFields(event)}
					/>
					<input
						name="tag"
						type="text"
						placeholder="tag (un seul)"
						value={formFields[4]}
						onChange={(event) => changeFields(event)}
					/>
					<input
						name="image"
						type="text"
						placeholder="image link"
						value={formFields[5]}
						onChange={(event) => changeFields(event)}
					/>
					<input
						required
						name="link"
						type="text"
						placeholder="article link"
						value={formFields[6]}
						onChange={(event) => changeFields(event)}
					/>
					<input name="submitArticle" type="submit" value="validate" />
				</form>
			</div>
		</>
	);
}

export default FormMyArticles;
