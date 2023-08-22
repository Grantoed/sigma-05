import { Order } from "./Order.interface";

export interface OrderResponse extends Order {
  status: string;
}
