/**
 * Created by adrian on 27/08/2018.
 */
import React, { Component } from 'react';
import { LoginForm } from './loginform';
import  Header  from '../common/header';

class Login extends Component {
    render() {
        return (
            <div>
                <Header text="Welcome to My-Tweet!" />
                <LoginForm />
            </div>
        );
    }
}

export default Login;