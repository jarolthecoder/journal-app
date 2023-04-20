import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/AuthSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
});