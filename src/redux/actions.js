import * as types from './actionTypes';

export const loadUsersStart = (pageInfo) => ({
    type: types.LOAD_USERS_START,
    payload: pageInfo,
});

export const loadUsersSuccess = (users) => ({
    type: types.LOAD_USERS_SUCCESS,
    payload: users,
})

export const loadUsersError = (error) => ({
    type: types.LOAD_USERS_ERROR,
    payload: error,
})


export const createUserStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user,
});

export const createUserSuccess = () => ({
    type: types.CREATE_USER_SUCCESS,
})

export const createUserError = (error) => ({
    type: types.CREATE_USER_ERROR,
    payload: error,
})

export const deleteUserStart = (id) => ({
    type: types.DELETE_USER_START,
    payload: id,
});

export const deleteUserSuccess = (id) => ({
    type: types.DELETE_USER_SUCCESS,
    payload: id,
});

export const deleteUserError = (error) => ({
    type: types.DELETE_USER_ERROR,
    payload: error,
});

export const updateUserStart = (user) => ({
    type: types.UPDATE_USER_START,
    payload: user,
});

export const updateUserSuccess = () => ({
    type: types.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
    type: types.UPDATE_USER_ERROR,
    payload: error,
});

export const searchUserStart = (query) => ({
    type: types.SEARCH_USER_START,
    payload: query,
});

export const searchUserSuccess = (users) => ({
    type: types.SEARCH_USER_SUCCESS,
    payload: users,
});

export const searchUserError = (error) => ({
    type: types.SEARCH_USER_ERROR,
    payload: error,
});

export const filterUserStart = (value) => ({
    type: types.FILTER_USER_START,
    payload: value,
});

export const filterUserSuccess = (users) => ({
    type: types.FILTER_USER_SUCCESS,
    payload: users,
});

export const filterUserError = (error) => ({
    type: types.FILTER_USER_ERROR,
    payload: error,
});


export const sortUserStart = (value) => ({
    type: types.SORT_USER_START,
    payload: value,
});

export const sortUserSuccess = (users) => ({
    type: types.SORT_USER_SUCCESS,
    payload: users,
});

export const sortUserError = (error) => ({
    type: types.SORT_USER_ERROR,
    payload: error,
});