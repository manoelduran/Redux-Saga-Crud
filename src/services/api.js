import axios from 'axios';

const devEnv = process.env.NODE_ENV !== "production";
const {REACT_APP_DEV_URL, REACT_APP_PROD_URL} = process.env;

export const api = axios.create({
    baseURL: devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL
});

export const getUsers = async (start, end) => {
    const response = await api.get(`?_start=${start}&_end=${end}`);
    return response;
};

export const createUser = async (user) => {
    const response = await api.post("/", user);
    return response;
};

export const deleteUser = async (id) => {
    const response = await api.delete(`/${id}`);
    return response;
};

export const updateUser = async (id, user) => {
    const response = await api.put(`/${id}`, user);
    return response;
};

export const searchUsers = async (query) => {
    const response = await api.get(`?q=${query}`);
    return response;
};

export const filterUsers = async (value) => {
    const response = await api.get(`?status=${value}`);
    return response;
};

export const sortUsers = async (value) => {
    const response = await api.get(`?_sort=${value}&_order=asc`);
    return response;
};