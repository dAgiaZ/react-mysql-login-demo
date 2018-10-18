/**
 * Created by adrian on 03/09/2018.
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);