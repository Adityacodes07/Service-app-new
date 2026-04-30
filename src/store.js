import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./componets/slice";

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});