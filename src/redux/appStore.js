import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import isSignOutReducer from "./isSignOutSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer:{
   user: userReducer,
   isSignOut: isSignOutReducer,
   movies: moviesReducer,
  }
})
export default appStore;