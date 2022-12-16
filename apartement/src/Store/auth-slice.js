import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as UserAPI from "../API/auth-api";

export const loginUser = createAsyncThunk("/login", async (user) => {
  const userData = await UserAPI.login(user);
  console.log("userdata", userData);
  return userData;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});

const { login } = userSlice.actions;
export default userSlice;
export { login };
