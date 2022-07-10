import axios from 'axios';
import { put } from 'redux-saga/effects';

export const api = axios.create({
    baseURL: "http://localhost:5000"
});

export const getUsers = async () => {
    const response = await api.get("/users");
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