/**
 * Created by adrian on 03/09/2018.
 */
import { userConstants } from '../constants/user';

export const authentication = (state = {}, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggedIn: false,
                error: action.error
            };
        case userConstants.LOGOUT:
            return {
                loggedIn: false,
                user: {}
            };
        default:
            return state
    }
}