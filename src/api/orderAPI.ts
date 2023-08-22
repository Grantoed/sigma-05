import { server } from "src/api/default";
import { Order } from "src/interfaces/Order.interface";

export const submitOrder = async ({
  productsInCart,
  client,
  subtotal,
  discount,
  total,
}: Order) => {
  try {
    const res = await server.post(`/orders`, {
      productsInCart,
      client,
      subtotal,
      discount,
      total,
    });
    return res.data;
  } catch (e: any) {
    return { status: e.response.status, message: e.message };
  }
};
