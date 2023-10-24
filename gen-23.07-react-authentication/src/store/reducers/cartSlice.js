import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const check = state.list.findIndex(
        (product) => product.id === action.payload.id
      );
      if (check !== -1) {
        state.list[check].quantity += action.payload.quantity;
      } else {
        state.list.push(action.payload);
      }

      // Count Total Price
      state.totalPrice = state.list
        .reduce(
          (sum, product) => sum + (+product?.price * product?.quantity || 0),
          0
        )
        .toFixed(2);

      // Count Total Quantity
      state.totalQuantity = state.list.reduce(
        (sum, product) => sum + +product?.quantity,
        0
      );
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
