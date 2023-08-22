import { Client } from "./client.interface";
import { OrderedProduct } from "./orderedProduct.interface";

export interface Order {
  productsInCart: OrderedProduct[];
  client: Client;
  totalPrice: number;
  totalDiscount: number;
}
