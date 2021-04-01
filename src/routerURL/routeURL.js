import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import BackGroundView from './../background';
import Homepage from './../homepage/homepage';
import Todo from './../page/todo-list';
import Profile from './../page/profile';

class RouterURL extends React.Component {
	render() {
		return(
			<Router>
				<div>
					<Route path="/" exact component={BackGroundView}/>
					<Route path="/home" exact component={Homepage}/>
					<Route />
				</div>
			</Router>
		);
	}
}

export default RouterURL;
