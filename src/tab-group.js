import React from "react";

function TabGroup(props) {
    function openLoginTab() {
        props.changeTab('login');
    }

    function openSignupTab() {
        props.changeTab('signup');
    }

    return (
        <ul className="tab-group">
            <li className="tab" className={(props.currentTab === 'signup') ? 'active' : ''} onClick={openSignupTab}>
                <a href="#signup">Sign Up</a>
            </li>
            <li className="tab" className={(props.currentTab === 'login') ? 'active' : ''} onClick={openLoginTab}>
                <a href="#login">Log In</a>
            </li>
        </ul>
    );
}

export default TabGroup;