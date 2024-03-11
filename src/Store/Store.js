import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const storePage = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});
export default storePage;
