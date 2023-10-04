import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Features/userSlice";

export default configureStore({
    reducer:{
        user:userSlice.reducer,
    },
});