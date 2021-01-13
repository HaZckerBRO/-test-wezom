import {SET_CONTACTS_VIEW, FETCH_USERS, REQUEST_POSTS, SHOW_LOADER, HIDE_LOADER} from './action.types';

export const setContactsView = (view) => {
	return {
		type: SET_CONTACTS_VIEW,
		payload: view
	}
};

export const setUsersList = (payload) => {
	return {
		type: FETCH_USERS,
		payload
	}
};

export const requestUsers = () => {
	return {
		type: REQUEST_POSTS,
	}
};

export const showLoader = () => {
	return {
		type: SHOW_LOADER,
	}
};

export const hideLoader = () => {
	return {
		type: HIDE_LOADER,
	}
};
