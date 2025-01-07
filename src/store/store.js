import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import authSlice from "./authSlice";

const store  = configureStore({
    reducer: {
        home: homeSlice,
        auth: authSlice
    }
});

export default store;