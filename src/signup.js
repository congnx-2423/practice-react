import React from 'react';
import Input from './Input/input-name';
import Button from './button';

class SignupView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            email: ''
        }
    }

    onChangeFirstName(input) {
        this.setState({firstName: input.target.value});
    }

    onChangeLastName(input) {
        this.setState({lastName: input.target.value});
    }

    onChangeEmail(input) {
        this.setState({email: input.target.value});
    }

    onChangePassword(input) {
        this.setState({password: input.target.value});
    }

    onSignup() {
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }

        this.props.signUp(user);
    }

    render() {
        return (
            <div id="signup">
                <h1>Sign Up for Free</h1>
                <form>
                    <div className="top-row">
                        <Input title="First Name" value={this.state.firstName} 
                            type="text" className="req" 
                            onChange={(input) => this.onChangeFirstName(input)}
                        />
                        <Input title="Last Name" value={this.state.lastName} 
                            type="text" className="req" 
                            onChange={(input) => this.onChangeLastName(input)}
                        />
                    </div>
                    <Input title="Email Address" value={this.state.email} 
                        type="email" className="req" 
                        onChange={(input) => this.onChangeEmail(input)}
                    />
                    <Input title="Set A Password" value={this.state.password} 
                        type="password" className="req" 
                        onChange={(input) => this.onChangePassword(input)}
                    />
                    <Button type="button" className="button button-block" title="Get Started"
                        onClick={() => this.onSignup()}
                    ></Button>
                </form>
            </div>
        );
    }
}

export default SignupView;
