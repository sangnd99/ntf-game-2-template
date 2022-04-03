import { configureStore } from "@reduxjs/toolkit";

import { createRootSlices } from "./slices";

export const store = configureStore({
  reducer: createRootSlices(),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
