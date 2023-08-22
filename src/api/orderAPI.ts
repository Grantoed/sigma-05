// import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "src/api/default";
import { Order } from "src/interfaces/Order.interface";
// import { OrderResponse } from "src/interfaces/orderResponse.interface";

// export const submitOrder = createAsyncThunk<OrderResponse, Order>(
//   "orders/submitOrder",
//   async (
//     { productsInCart, client, totalPrice, totalDiscount }: Order,
//     thunkAPI
//   ) => {
//     try {
//       const res = await server.post(`/orders`, {
//         productsInCart,
//         client,
//         totalPrice,
//         totalDiscount,
//       });
//       return res.data;
//     } catch (e: any) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const submitOrder = async ({
  productsInCart,
  client,
  totalPrice,
  totalDiscount,
}: Order) => {
  try {
    const res = await server.post(`/orders`, {
      productsInCart,
      client,
      totalPrice,
      totalDiscount,
    });
    return res.data;
  } catch (e: any) {
    return { status: e.response.status, message: e.message };
  }
};
