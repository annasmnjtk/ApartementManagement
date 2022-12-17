import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import userSlice from "./Store/auth-slice";
import residentSlice from "./Store/master-residents-slice";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const MainStore = configureStore(
  {
    reducer: {
      [residentSlice.name]: residentSlice.reducer,
      [userSlice.name]: userSlice.reducer,
    },
  },
  composedEnhancer
);

export default MainStore;
