import axios from 'axios';

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
}