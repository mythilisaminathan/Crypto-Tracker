import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false
  },
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    }
  }
}); 

export const {setAuth, setIsLoggedIn} = authSlice.actions;
export default authSlice.reducer;