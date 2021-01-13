import { put, call, takeEvery } from 'redux-saga/effects';
import {randomIntegerInRange} from '../utils';
import {hideLoader, setUsersList, showLoader} from './contacts/actions';
import {REQUEST_POSTS} from './contacts/action.types';

export {
	sagaWatcher,
}

function* sagaWatcher() {
	yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
	yield put(showLoader());
	const payload = yield call(fetchUsers);
	yield put(setUsersList(payload.results));
	yield put(hideLoader())
}


async function fetchUsers() {
	const countUsers = randomIntegerInRange(1, 1500);
	const response = await fetch(`https://randomuser.me/api/1.3?seed=wezom-react-redux-test&results=${countUsers}`);
	return await response.json()
}
