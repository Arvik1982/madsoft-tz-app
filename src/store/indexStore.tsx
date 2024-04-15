import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../store/slices/appSlice";

export default configureStore({
  reducer: {
    appRedux: appSlice,
  },
});
