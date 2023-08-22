import { Client } from "./client.interface";
import { OrderedProduct } from "./orderedProduct.interface";

export interface Order {
  productsInCart: OrderedProduct[];
  client: Client;
  subtotal: number;
  discount: number;
  total: number;
}
