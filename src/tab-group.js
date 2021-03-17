import React from "react";

function TabGroup() {
    let state = false;

    function handleSignupClick() {

    }

    function handleLoginClick() {

    }

    return (
        <ul className="tab-group">
            <li className="tab active">
                <a href="#signup" onClick={handleSignupClick}>Sign Up</a>
            </li>
            <li className="tab">
                <a href="#login" onClick={handleLoginClick}>Log In</a>
            </li>
        </ul>
    );
}

export default TabGroup;