import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../api/Axios";

export const getUserTodos = createAsyncThunk("todo/getUserTodos", async () => {
    const userID = localStorage.getItem("userID");
    const response = await Axios.getTodosByUserID(userID);
    return response.data;
});

export const addTodoData = createAsyncThunk(
    "todo/addTodoData",
    async (title, {rejectWithValue}) => {
        try {
            const userID = localStorage.getItem("userID");
            const response = await Axios.addTodo(userID, title);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.error);
        }
    },
);
