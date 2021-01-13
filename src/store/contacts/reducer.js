import {SET_CONTACTS_VIEW, FETCH_USERS, SHOW_LOADER, SHOW_FETCH_ERROR, HIDE_FETCH_ERROR, HIDE_LOADER} from './action.types';
// import { OActionTypes as app } from './actions';

const getDefaultView = () => {
	return localStorage.getItem('contactsView') || 'tabular';
};

export const initialState = {
	contactsView: getDefaultView(),
	usersList: [],
	isLoading: false,
	fetchError: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CONTACTS_VIEW:
			return {
				...state,
				contactsView: action.payload
			};

		case FETCH_USERS: {
			return {
				...state,
				usersList: action.payload
			}
		}

		case SHOW_LOADER: {
			return {
				...state,
				isLoading: true
			}
		}

		case HIDE_LOADER: {
			return {
				...state,
				isLoading: false
			}
		}

		case SHOW_FETCH_ERROR: {
			return {
				...state,
				fetchError: true
			}
		}

		case HIDE_FETCH_ERROR: {
			return {
				...state,
				fetchError: false
			}
		}

		default:
			return state;
	}
};
