import { createSlice } from "@reduxjs/toolkit";
import {
    addTodoData,
    changeTodoData,
    deleteTodoData,
    getUserTodos,
} from "./api";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        data: [],
        error: null,
        success: null,
        loader: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserTodos.pending, (state) => {
            state.loader = true;
            state.error = null;
            state.success = null;
        });
        builder.addCase(getUserTodos.fulfilled, (state, action) => {
            state.loader = false;
            state.data = action.payload;
        });
        builder.addCase(getUserTodos.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        builder.addCase(addTodoData.pending, (state) => {
            state.loader = true;
            state.success = null;
        });
        builder.addCase(addTodoData.fulfilled, (state, action) => {
            state.loader = false;
            state.data = [...state.data, action.payload];
        });
        builder.addCase(addTodoData.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        builder.addCase(changeTodoData.pending, (state) => {
            state.loader = false;
            state.error = null;
        });
        builder.addCase(changeTodoData.fulfilled, (state, action) => {
            state.loader = false;
            state.data = state.data.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo,
            );
        });
        builder.addCase(changeTodoData.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });

        builder.addCase(deleteTodoData.pending, (state) => {
            state.loader = false;
            state.error = null;
        });
        builder.addCase(deleteTodoData.fulfilled, (state, action) => {
            state.loader = false;
            state.data = state.data.filter(
                (todo) => todo.id !== action.payload.id,
            );
        });
        builder.addCase(deleteTodoData.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });
    },
    selectors: {
        getTodoData: (state) => state.data,
        getTodoError: (state) => state.error,
        getTodoLoader: (state) => state.loader,
        getTodosDone: (state) => state.data.filter((todo) => todo.isDone),
        getTodosInProcess: (state) => state.data.filter((todo) => !todo.isDone),
        getTodosEdited: (state) => state.data.filter((todo) => todo.updatedAt),
    },
});

export const todoReducer = todoSlice.reducer;
export const {
    getTodoData,
    getTodoError,
    getTodosDone,
    getTodoLoader,
    getTodosEdited,
    getTodosInProcess,
} = todoSlice.selectors;
