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
import {
    loadUsersSuccess,
    loadUsersError,
    createUserError,
    createUserSuccess,
    deleteUserSuccess,
    deleteUserError,
    updateUserSuccess,
    updateUserError,
    searchUserSuccess,
    searchUserError,
    filterUserSuccess,
    filterUserError,
    sortUserSuccess,
    sortUserError,
} from './actions';
import * as api from '../services/api';


function* onLoadUsersStartAsync() {
    try {
        const response = yield call(api.getUsers); // chamada assyncrona
        if (response.status === 200) {
            yield delay(500); // setTimeOut
            yield put(loadUsersSuccess(response.data));
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data));
    }
};

function* onCreateUserStartAsync({ payload }) {
    try {
        const response = yield call(api.createUser, payload); // chamada assyncrona
        if (response.status === 201) {
            yield put(createUserSuccess(response.data));
        }
    } catch (error) {
        yield put(createUserError(error.response.data));
    }
};

function* onDeleteUserStartAsync(id) {
    try {
        const response = yield call(api.deleteUser, id); // chamada assyncrona
        if (response.status === 200) {
            yield delay(500);
            yield put(deleteUserSuccess(id));
        }
    } catch (error) {
        yield put(deleteUserError(error.response.data));
    }
};

function* onUpdateUserStartAsync({ payload: { id, formValue } }) {
    try {
        const response = yield call(api.updateUser, id, formValue); // chamada assyncrona
        if (response.status === 200) {
            yield put(updateUserSuccess());
        }
    } catch (error) {
        yield put(updateUserError(error.response.data));
    }
};

function* onSearchUserStartAsync({ payload: query }) {
    try {
        const response = yield call(api.searchUsers, query); // chamada assyncrona
        if (response.status === 200) {
            yield put(searchUserSuccess(response.data));
        }
    } catch (error) {
        yield put(searchUserError(error.response.data));
    }
};

function* onFilterUserStartAsync({ payload: value }) {
    try {
        const response = yield call(api.filterUsers, value); // chamada assyncrona
        if (response.status === 200) {
            yield put(filterUserSuccess(response.data));
        }
    } catch (error) {
        yield put(filterUserError(error.response.data));
    }
};

function* onSortUserStartAsync({ payload: value }) {
    try {
        const response = yield call(api.sortUsers, value); // chamada assyncrona
        if (response.status === 200) {
            yield put(sortUserSuccess(response.data));
        }
    } catch (error) {
        yield put(sortUserError(error.response.data));
    }
};

function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
};

function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync)
};

function* onDeleteUser() {
    while (true) {
        const { payload: id } = yield take(types.DELETE_USER_START);
        yield call(onDeleteUserStartAsync, id);
    }
};

function* onUpdateUser() {
    yield takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
};

function* onSearchUsers() {
    yield takeLatest(types.SEARCH_USER_START, onSearchUserStartAsync)
};

function* onFilterUsers() {
    yield takeLatest(types.FILTER_USER_START, onFilterUserStartAsync)
};

function* onSortUsers() {
    yield takeLatest(types.SORT_USER_START, onSortUserStartAsync)
};

const userSagas = [
    fork(onLoadUsers),
    fork(onCreateUser),
    fork(onDeleteUser),
    fork(onUpdateUser),
    fork(onSearchUsers),
    fork(onFilterUsers),
    fork(onSortUsers),
];

export default function* rootSaga() {
    yield all([...userSagas]);
};