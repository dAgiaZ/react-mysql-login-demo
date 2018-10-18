/**
 * Created by adrian on 03/09/2018.
 */
import { userConstants } from '../constants/user'


const login = (email, password) => {

    const loginRequest = user => {
        return { type: userConstants.LOGIN_REQUEST, user }
    }
    const loginSuccess = user => {
        return { type: userConstants.LOGIN_SUCCESS, user }
    }
    const loginFailure = error => {
        return { type: userConstants.LOGIN_FAILURE, error }
    }

    return dispatch => {
        dispatch(loginRequest({ email }));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };

        fetch(`/login`, requestOptions)
            .then(response =>  response.json() )
            .then(
                authObject => {
                if (authObject.err){
                    throw new Error(authObject.err.loginMessage)
                } else {
                    dispatch(loginSuccess(authObject.authUser));
                }
            })
            .catch( error => {
                dispatch(loginFailure(error.message));
            });
    };
}

const logout = () => {
    fetch('/logout');
    return { type: userConstants.LOGOUT };
}

export const userActions = {
    login,
    logout
};