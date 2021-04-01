import React from 'react';
import Input from './Input/input-name';
import Button from './button';

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onChangeEmail(input) {
        this.setState({
            email: input.target.value,
        })
    }

    onChangePassword(input) {
        this.setState({
            password: input.target.value,
        })
    }

    submitForm() {
        if (this.state.email == '' || this.state.password == '') {
            alert('Enter email and password');
            return;
        }
        let infor = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.logIn(infor);

    }

    render(){
        return (
            <div id="login">
                <h1>Welcome Back!</h1>
                <form>
                    <Input type="email" 
                        title="Email Address" 
                        name="email" 
                        value={this.state.email} 
                        className="req" 
                        onChange={(input) => this.onChangeEmail(input)} />
                    <Input type="password" 
                        title="Password" 
                        name="password" 
                        className="req" 
                        onChange={(input) => this.onChangePassword(input)} />
                    <Button title="Login" 
                        className="button button-block" 
                        type="button" 
                        onClick={() => this.submitForm()}
                    />
                </form>
            </div>
        );
    }
}

export default LoginView;
