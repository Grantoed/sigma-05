import { server } from "src/api/default";
import { Order } from "src/interfaces/Order.interface";

type FetchAllArgs = {
  page?: string;
  limit?: string;
};

export const fetchAllOrders = async ({ page, limit }: FetchAllArgs) => {
  try {
    const params = new URLSearchParams();

    if (page) {
      params.append("page", page.toString());
    }
    if (limit) {
      params.append("limit", limit.toString());
    }

    const res = await server.get(`/orders`, { params });
    return res.data;
  } catch (e: any) {
    throw e;
  }
};

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
    throw e;
  }
};
