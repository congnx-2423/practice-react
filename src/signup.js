import React from 'react';
import Input from './Input/input-name';
import Button from "./button";

function SignupView() {
    return (
        <div id="signup">
            <h1>Sign Up for Free</h1>
            <form action="" method="post">
                <div className="top-row">
                    <Input title="First Name" type="text" className="req"></Input>
                    <Input title="Last Name" type="text" className="req"></Input>
                </div>
                <Input title="Email Address" type="email" className="req"></Input>
                <Input title="Set A Password" type="password" className="req"></Input>
                <Button type="submit" className="button button-block" title="Get Started"></Button>
            </form>
        </div>
    );
}

export default SignupView;