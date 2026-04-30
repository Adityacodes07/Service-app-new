import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedService: null,
  bookings: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.selectedService = action.payload;
    },
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    deleteBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

export const { setBooking, addBooking, deleteBooking } = bookingSlice.actions;
export default bookingSlice.reducer;