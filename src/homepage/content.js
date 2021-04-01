import React from 'react';
import Todo from './../page/todo-list';
import Home from './../page/home';
import Profile from './../page/profile';
import { Redirect, Route, Switch } from "react-router-dom";

class LayoutContent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		switch (this.props.currentContent) {
			case '/profile':
				return (<Profile />);
			case '/todo-list':
				return (<Todo />);
			default:
				return (<Home />);
		}
	}
}

export default LayoutContent;
