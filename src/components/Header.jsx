import '@sass/core/globals.scss';

import React from 'react';

import logo from '../assets/images/gigachad.png';

function Header() {
	return (
		<header className="home-header">
			<img src={logo} alt="mylogo" />
			<h1>My standby app.</h1>
			<nav>
				<a href="/">Home</a>
				<a href="/mylist">My list</a>
			</nav>
		</header>
	);
}

export default Header;
