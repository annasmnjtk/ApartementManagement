import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Store/auth-slice";
import unitSlice from "./Store/master-units-slice";

const MainStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [unitSlice.name]: unitSlice.reducer,
  },
});
export default MainStore;
