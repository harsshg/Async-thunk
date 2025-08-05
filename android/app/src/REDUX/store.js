import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../features/userdetailslice";

export const store = configureStore({
  reducer: {
   app:userDetail
  },
});