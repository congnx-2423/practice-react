import React from 'react';
import TabGroup from './tab-group';
import TabContent from './tab-content';

class BackGroundView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: 'login',
			users: [
                {id: 1, firstName: 'Cong',lastName: 'Nguyen', email: 'cong@gmail.com', password: '1234'},
            ],
            logged: false
		}
	}

	changeTab(newTab) {
		this.setState({tab:newTab});
	}

	signUp(user) {
		console.log(user);
	}

	logIn(infor) {
		if (infor.email === 'cong@gmail.com' && infor.password === '123') {
			this.setState({logged: true});
		}
	}

	render() {
		return (
	        <div className="form">
	            <TabGroup changeTab={(tab) => this.changeTab(tab)} currentTab={this.state.tab} />
	            <TabContent currentTab={this.state.tab} 
	            	signUp={(user) => this.signUp(user)}
	            	logIn={(infor) => this.logIn(infor)}
	            	logged={this.state.logged}
            	/>
	        </div>
	    );

	}
    
}

export default BackGroundView;
