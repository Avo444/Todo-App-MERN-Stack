import { configureStore } from "@reduxjs/toolkit";
import { authReducer, todoReducer } from "./slices";

const store = configureStore({
    reducer: {
        auth: authReducer,
        todo: todoReducer,
    },
});

export default store;
