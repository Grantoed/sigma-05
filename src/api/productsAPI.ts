import { server } from "src/api/default";

export type FetchAllArgs = {
  page?: string;
  limit?: string;
  q?: string;
};

export const fetchAllProducts = async ({ page, limit, q }: FetchAllArgs) => {
  try {
    const params = new URLSearchParams();

    if (page) {
      params.append("page", page.toString());
    }
    if (limit) {
      params.append("limit", limit.toString());
    }
    if (q) {
      params.append("q", q);
    }

    const res = await server.get(`/products`, { params });
    return res.data;
  } catch (e: any) {
    throw e;
  }
};
