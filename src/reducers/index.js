/**
 * Created by adrian on 03/09/2018.
 */
import { combineReducers } from 'redux';
import { authentication } from './user';

const rootReducer = combineReducers({
    authentication
});

export default rootReducer;