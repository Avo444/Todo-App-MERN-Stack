import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        data: [],
        error: null,
        loader: false,
    },
    reducers: {},
    extraReducers: (builder) => {},
    selectors: {
        getTodoData: (state) => state.data,
        getTodoError: (state) => state.error,
        getTodoLoader: (state) => state.loader,
    },
});

export const todoReducer = todoSlice.reducer;
export const { getTodoData, getTodoError, getTodoLoader } = todoSlice.selectors;
