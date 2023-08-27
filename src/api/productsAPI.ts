import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "src/api/default";
import { ProductsResponse } from "src/interfaces/productsResponse.interface";

type FetchAllArgs = {
  page?: string;
  limit?: string;
  q?: string;
};

export const fetchAllProducts = async ({ page, limit, q }: FetchAllArgs) => {
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
};

export const fetchAll = createAsyncThunk<ProductsResponse, FetchAllArgs>(
  "products/fetchAll",
  async (args, thunkAPI) => {
    try {
      return await fetchAllProducts(args);
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const searchProducts = createAsyncThunk<ProductsResponse, FetchAllArgs>(
  "products/searchProducts",
  async (args, thunkAPI) => {
    try {
      return await fetchAllProducts(args);
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// type GetByCategoryArgs = {
//   categoryName: string;
//   page?: string;
//   limit?: string;
// };

// Search all products. Use page & limit for pagination.
// Use query to filter products by providing name or category

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
