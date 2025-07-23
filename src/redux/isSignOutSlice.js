import { createSlice } from "@reduxjs/toolkit";

const storedAuth = localStorage.getItem("isAuthenticated") === "true";
const isSignOutSlice = createSlice({
  name: "isSignOut",
  initialState: {
    isAuthenticated: storedAuth,
  },
  reducers: {
    login: (state) =>{
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true");
    },
    logout: (state) =>{
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", "false");
    }
  }
})
export const {login, logout} = isSignOutSlice.actions;
export default isSignOutSlice.reducer;