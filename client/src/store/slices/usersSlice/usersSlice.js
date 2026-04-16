import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        error: null,
        loader: false,
    },
    reducers: {},
    extraReducers: (builder) => {},
    selectors: {
        getAllUsers: (state) => state.data,
        getUsersError: (state) => state.error,
        getUsersLoader: (state) => state.loader,
    },
});

export const usersReducer = usersSlice.reducer;
export const { getAllUsers, getUsersError, getUsersLoader } =
    usersSlice.selectors;
