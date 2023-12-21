import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice";
const store = configureStore({
    reducer:{
       auth:authSlice, 
       // Add More Slice Here For Post
    }
});
export default store;