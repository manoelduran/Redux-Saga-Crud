import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:5000"
});

export const getUsers = async () => {
    const response = await api.get("/users");
    return response;
}
// export const loadUsersApi = async () =>
// await axios.get("http://localhost:5000/users");