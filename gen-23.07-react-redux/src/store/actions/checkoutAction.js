import { CHECKOUT_ORDER } from "../types";

export const checkoutOrder = (payload) => ({
  type: CHECKOUT_ORDER,
  payload,
});
