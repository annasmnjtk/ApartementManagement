import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Store/auth-slice";
import residentSlice from "./Store/master-residents-slice";

const MainStore = configureStore({
  reducer: {
    [residentSlice.name]: residentSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});

export default MainStore;
