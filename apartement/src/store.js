import { configureStore } from "@reduxjs/toolkit";
import residentSlice from "./stores/master-residents-slice";
import userSlice from "./Store/auth-slice";

const MainStore = configureStore({
  reducer: {
    [residentSlice.name]: residentSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});

export default MainStore;
