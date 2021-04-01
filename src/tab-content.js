import React from 'react';
import LoginView from './login';
import SignupView from './signup';
import { useHistory } from 'react-router-dom';

function TabContent(props) {
	let history = useHistory();
	log();
	function log() {
		if (props.logged === true) {
			history.push('home');
		} else {
			return;
		}
	}

    if (props.currentTab === 'signup') {
    	return (
            <SignupView signUp={props.signUp} />
        );
    }

    return (
        <LoginView logIn={props.logIn}/>
    );
}

export default TabContent;
