import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Store/auth-slice";

const MainStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
});
export default MainStore;
