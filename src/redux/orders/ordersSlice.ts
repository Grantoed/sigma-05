import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderedProduct } from "src/interfaces/orderedProduct.interface";
import { OrdersSlice } from "src/interfaces/ordersSlice.interface";

const initialState: OrdersSlice = {
  productsInCart: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<OrderedProduct>) {
      if (
        !state.productsInCart.find(
          (product) => product._id === action.payload._id
        )
      ) {
        state.productsInCart.unshift(action.payload);
      } else {
        state.productsInCart[
          state.productsInCart.findIndex(
            (product) => product._id === action.payload._id
          )
        ].quantity += action.payload.quantity;
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const index = state.productsInCart.findIndex(
        (product) => product._id === action.payload
      );
      if (index > -1) {
        state.productsInCart.splice(index, 1);
      }
    },
    changeProductQuantity(
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) {
      const productToChange =
        state.productsInCart[
          state.productsInCart.findIndex(
            (product) => product._id === action.payload._id
          )
        ];
      productToChange.quantity = action.payload.quantity;
    },
    // incrementProductQuantity(state, action: PayloadAction<string>) {
    //   const productToChange =
    //     state.productsInCart[
    //       state.productsInCart.findIndex(
    //         (product) => product._id === action.payload
    //       )
    //     ];
    //   productToChange.quantity += 1;
    // },

    // decrementProductQuantity(
    //   state,
    //   action: PayloadAction<{ _id: string; quantity: number }>
    // ) {
    //   const productToChange =
    //     state.productsInCart[
    //       state.productsInCart.findIndex(
    //         (product) => product._id === action.payload._id
    //       )
    //     ];
    //   productToChange.quantity -= 1;
    // },
  },
});

export const {
  addToCart,
  removeFromCart,
  changeProductQuantity,
  // incrementProductQuantity,
  // decrementProductQuantity,
} = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
