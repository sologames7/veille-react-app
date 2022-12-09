import React, { useEffect, useState } from 'react';

function FormMyArticles({ isOpenForm, setIsOpenForm }) {
	
	return (
		<>
			<div
				className={`formSLideFromBottom ${
					isOpenForm ? 'openForm' : 'closeForm'
				}`}>
                <form className='articleForm'>
                    <input type="text" placeholder='' />
                </form>
			</div>
		</>
	);
}

export default FormMyArticles;
