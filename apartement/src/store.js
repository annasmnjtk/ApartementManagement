import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Store/auth-slice";
import residentSlice from "./Store/master-residents-slice";
import unitSlice from "./Store/master-units-slice";
import { transaksiSlice } from "./Store/transaksi-slice";

const MainStore = configureStore({
  reducer: {
    [residentSlice.name]: residentSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [unitSlice.name]: unitSlice.reducer,
    [transaksiSlice.name]: transaksiSlice.reducer,
  },
});

export default MainStore;
