import '@sass/content/home/home.scss';

import Home from '@component/Home';
import MyList from '@component/MyList';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/mylist">
					<MyList />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
