import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "src/api/default";
import { ProductsResponse } from "src/interfaces/productsResponse.interface";

type FetchAllArgs = {
  page?: string;
  limit?: string;
  query?: string;
};

// type GetByCategoryArgs = {
//   categoryName: string;
//   page?: string;
//   limit?: string;
// };

// Search all products. Use page & limit for pagination.
// Use query to filter products by providing name or category
export const fetchAll = createAsyncThunk<ProductsResponse, FetchAllArgs>(
  "products/fetchAll",
  async ({ page, limit, query }: FetchAllArgs, thunkAPI) => {
    try {
      const params = new URLSearchParams();

      if (page) {
        params.append("page", page.toString());
      }
      if (limit) {
        params.append("limit", limit.toString());
      }
      if (query) {
        params.append("query", query);
      }

      const res = await server.get(`/products`, { params });
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// Search all product by id.
// export const fetchById = (async (id: string) => {
//   try {
//     const res = await server.get(`/products/${id}`);
//     return res.data;
//   } catch (e: any) {
//     throw new Error(e.message);
//   }
// });

// Search all products. Use page & limit for pagination.
// export const fetchByCategory = async ({
//   categoryName,
//   page,
//   limit,
// }: GetByCategoryArgs) => {
//   try {
//     const params = new URLSearchParams();

//     if (page) {
//       params.append("page", page.toString());
//     }
//     if (limit) {
//       params.append("limit", limit.toString());
//     }

//     const res = await server.get(`/products/${categoryName}`, { params });
//     return res.data;
//   } catch (e: any) {
//     throw new Error(e.message);
//   }
// };
