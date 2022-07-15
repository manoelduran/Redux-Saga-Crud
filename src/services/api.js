import axios from 'axios';
import { put } from 'redux-saga/effects';

export const api = axios.create({
    baseURL: "http://localhost:5000"
});

export const getUsers = async (start, end) => {
    const response = await api.get(`/users?_start=${start}&_end=${end}`);
    return response;
};

export const createUser = async (user) => {
    const response = await api.post("/users", user);
    return response;
};

export const deleteUser = async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response;
};

export const updateUser = async (id, user) => {
    const response = await api.put(`/users/${id}`, user);
    return response;
};

export const searchUsers = async (query) => {
    const response = await api.get(`/users?q=${query}`);
    return response;
};

export const filterUsers = async (value) => {
    const response = await api.get(`/users?status=${value}`);
    return response;
};

export const sortUsers = async (value) => {
    const response = await api.get(`/users?_sort=${value}&_order=asc`);
    return response;
};