import { Order } from "src/interfaces/Order.interface";
import { RootState } from "../store";

export const selectProductsInCart = (
  state: RootState
): Order["productsInCart"] => state.orders.productsInCart;
