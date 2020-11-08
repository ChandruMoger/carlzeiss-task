import React, { Component } from "react";
import { getData } from '../Api/services';
import Formerrors from './Formerrors';
class Login extends Component {    
    state = {
        email: '',
        password: '',
        formErrors: { email: '', password: '' },
        emailValid: false,
        passwordValid: false,
        formValid: false,
        users: []
    }
    componentDidMount() {
        getData('users').then((res) => {
            this.setState({
                users: res
            }, () => {
                console.log(this.state.users);
            })
        })
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 2;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
     }

     login(e) {
         e.preventDefault();
         let user = this.state.users.find((user) => user.email === this.state.email);
         if(user) {
               this.setState({
                   emailValid: true
               }, () => {
                if(user.username !== this.state.password) {
                    this.setState({
                        formErrors : {
                            password: "Password is wrong!",
                            email: ''
                        },
                        passwordValid: false
                    })
                 } else {
                    this.setState({
                        passwordValid: true
                    }, () => {
                        if(this.state.emailValid && this.state.passwordValid) {
                            localStorage.setItem('user', this.state.password);
                            this.props.history.push("/carlzeiss-task");
                        }
                    })
                 }
               })
         } else {
            this.setState({
                formErrors : {
                    email: "Email does not exist!",
                    password: ''
                },
                passwordValid: false
            })
         }           
     }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className={`form-control ${this.errorClass(this.state.formErrors.email)}`} name="email"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email" value={this.state.email}
                            onChange={(e) => this.handleUserInput(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className={`form-control ${this.errorClass(this.state.formErrors.password)}`}
                            id="exampleInputPassword1" name="password"
                            placeholder="Password" value={this.state.password}
                            onChange={(e) => this.handleUserInput(e)} />
                    </div>
                    <Formerrors formErrors={this.state.formErrors}></Formerrors>
                    <button onClick={(e) => this.login(e)} className="btn btn-primary"
                        disabled={!this.state.formValid}>Sign up</button>
                </form>
            </div>
        )
    }
}

export default Login
