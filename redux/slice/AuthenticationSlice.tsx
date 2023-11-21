import { createSlice } from "@reduxjs/toolkit";

export const AuthenticationSlice = createSlice({
  name: "Authentication",
  initialState: {
    IsSignIn: false,
  },
  reducers: {
    getIsSignIn: (state) => {
      state;
    },
    setIsSignIn: (state, action) => {
      state.IsSignIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getIsSignIn, setIsSignIn } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
