import axios from "axios";
const instance = axios.create({ baseURL: import.meta.env.VITE_BACKEND_API });

export const Axios = {
    // AUTH
    register: (data) => instance.post("/auth/register", data),
    login: (data) => instance.post("/auth/login", data),

    // USERS
    getUserData: (userID) => instance.get(`/api/users/${userID}`),

    // Todos
    getTodosByUserID: (userID) => instance.get(`/api/todos?userID=${userID}`),
    addTodo: (userID, title) => instance.post(`/api/todos`, { userID, title }),
    patchTodoData: (data) => instance.patch(`/api/todos/${data.id}`, data),
    deleteTodoData: (id) => instance.delete(`/api/todos/${id}`),
};
