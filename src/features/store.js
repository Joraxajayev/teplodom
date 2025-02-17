import { configureStore } from "@reduxjs/toolkit";
import React from "react";

export default configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
