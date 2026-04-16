import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../../api/Axios";

export const register = createAsyncThunk(
    "auth/register",
    async (data, { rejectWithValue }) => {
        try {
            const response = await Axios.register(data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data.error);
        }
    },
);
export const login = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await Axios.login(data);
            const result = response.data;
            localStorage.setItem("userID", result._id);
            return result;
        } catch (err) {
            return rejectWithValue(err.response.data.error);
        }
    },
);

export const getUserData = createAsyncThunk(
    "auth/getUserData",
    async (id, { rejectWithValue }) => {
        try {
            const response = await Axios.getUserData(id);
            return response.data;
        } catch (error) {
            return rejectWithValue(err.response.data.error);
        }
    },
);
