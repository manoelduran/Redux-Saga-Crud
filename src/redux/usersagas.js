import * as types from './actionTypes';
import {
    take,
    takeEvery,
    takeLatest,
    put,
    all,
    delay,
    fork,
    call
} from 'redux-saga/effects';
import { loadUsersSuccess, loadUsersError, createUserError, createUserSuccess } from './actions';
import * as api from '../services/api';


export function* onLoadUsersStartAsync() {
    try {
        const response = yield call(api.getUsers); // chamada assyncrona
        if (response.status === 200) {
            yield delay(500); // setTimeOut
            yield put(loadUsersSuccess(response.data));
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data));
    }
}

export function* onCreateUserStartAsync({ payload }) {
    try {
        const response = yield call(api.createUser, payload); // chamada assyncrona
        if (response.status === 201) {
            yield put(createUserSuccess(response.data));
        }
    } catch (error) {
        yield put(createUserError(error.response.data));
    }
}

export function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}

export function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync)
}

const userSagas = [
    fork(onLoadUsers),
    fork(onCreateUser)
];

export default function* rootSaga() {
    yield all([...userSagas]);
}