import React from "react";
import LoginView from './login';
import SignupView from './signup';

function TabContent() {
    return (
        <div className="tab-content">
            <SignupView></SignupView>
            <LoginView></LoginView>
        </div>
    );
}

export default TabContent;