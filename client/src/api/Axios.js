import axios from "axios";
const instance = axios.create({ baseURL: import.meta.env.VITE_BACKEND_API });

export const Axios = {
    // AUTH
    register: (data) => instance.post("/auth/register", data),
    login: (data) => instance.post("/auth/login", data),

    // USERS
    getUserData: (userID) => instance.get(`/api/users/${userID}`),
};
