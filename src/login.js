import React from 'react';
import Input from "./Input/input-name";
import Button from "./button";

function LoginView() {
    return (
        <div id="login">
            <h1>Welcome Back!</h1>
            <form action="" method="post">
                <Input type="email" title="Email Address" className="req"></Input>
                <Input type="password" title="Password" className="req"></Input>
                <p className="forgot"><a href="#">Forgot Password?</a></p>
                <Button title="Login" className="button button-block" type="button"></Button>
            </form>
        </div>
    );
}

export default LoginView;