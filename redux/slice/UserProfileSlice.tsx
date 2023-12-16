import { createSlice } from "@reduxjs/toolkit";

export const UserProfileSlice = createSlice({
  name: "UserProfile",
  initialState: {
    profilePicturePath: "https://reactnative.dev/img/tiny_logo.png",
    fullName: "Truong Tan Thanh",
    nickName: "truongtanthanh1202",
    email: "truongtanthanh1202@gmail.com",
    gender: "male",
  },
  reducers: {
    getProfile: (state) => {
      state;
    },
    setProfilePicturePath: (state, action) => {
      state.profilePicturePath = action.payload;
    },
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setNickName: (state, action) => {
      state.nickName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProfile,
  setProfilePicturePath,
  setFullName,
  setNickName,
  setEmail,
  setGender,
} = UserProfileSlice.actions;

export default UserProfileSlice.reducer;
