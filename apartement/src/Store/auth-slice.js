import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as UserAPI from "../API/auth-api";

export const loginUser = createAsyncThunk("/login", async (user) => {
  const userData = await UserAPI.login(user);
  return userData;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: undefined,
    error: undefined,
    login: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        sessionStorage.setItem("token", action.payload.token);
        console.log(action.payload.token);
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log(action);
        state.error = action.error.message;
      });
  },
});

const { login } = userSlice.actions;
export default userSlice;
export { login };
