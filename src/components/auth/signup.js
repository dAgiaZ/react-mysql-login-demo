/**
 * Created by adrian on 27/08/2018.
 */
import React, { Component } from 'react';
import SignupForm  from './signupform';
import  Header  from '../common/header';

class Signup extends Component {
    render() {
        return (
            <div>
                <Header text="Sign Up" />
                <SignupForm />
            </div>
        );
    }
}

export default Signup;