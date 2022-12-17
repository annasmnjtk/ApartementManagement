import { configureStore } from "@reduxjs/toolkit";
import residentSlice from "./stores/master-residents-slice";

const MainStore = configureStore({
  reducer: {
    [residentSlice.name]: residentSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});


