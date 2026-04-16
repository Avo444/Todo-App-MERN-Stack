import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./api";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        data: null,
        error: null,
        loader: false,
        success: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.error = null;
            state.loader = true;
            state.success = false;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.loader = false;
            state.success = true;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.loader = false;
            state.success = false;
            state.error = action.payload;
        });

        builder.addCase(login.pending, (state) => {
            state.error = null;
            state.loader = true;
            state.success = false;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.loader = false;
            state.success = true;
            state.data = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loader = false;
            state.error = action.payload;
        });
    },
    selectors: {
        getAuthData: (state) => state.data,
        getAuthError: (state) => state.error,
        getAuthLoader: (state) => state.loader,
        getAuthSuccess: (state) => state.success,
    },
});

export const authReducer = authSlice.reducer;
export const { getAuthData, getAuthError, getAuthLoader, getAuthSuccess } =
    authSlice.selectors;
