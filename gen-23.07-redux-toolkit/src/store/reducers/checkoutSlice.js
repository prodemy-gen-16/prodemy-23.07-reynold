import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCheckout: {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    checkoutOrder: (state, action) => {
      state.dataCheckout = action.payload;
    },
  },
});

export const { checkoutOrder } = checkoutSlice.actions;

export default checkoutSlice.reducer;
