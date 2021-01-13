import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as reducers from './export-reducers.js';
import {contactsReducer} from './export-reducers';

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	contacts: contactsReducer,
	...reducers
});

export { createRootReducer };
