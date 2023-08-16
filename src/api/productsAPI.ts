import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetAllArgs } from "src/interfaces/getAll.interface";
import { ProductsResponse } from "src/interfaces/productsResponse.interface";
import { GetByCategory } from "src/interfaces/getByCategory.interface";

const BASE_URL = "http://localhost:8080/api";

const server = axios.create({
  baseURL: BASE_URL,
});

// Search all products. Use page & limit for pagination.
// Use query to filter products by providing name or category
export const fetchAll = createAsyncThunk<ProductsResponse, GetAllArgs>(
  "products/fetchAll",
  async ({ page, limit, query }: GetAllArgs, thunkAPI) => {
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
export const fetchByCategory = async ({
  categoryName,
  page,
  limit,
}: GetByCategory) => {
  try {
    const params = new URLSearchParams();

    if (page) {
      params.append("page", page.toString());
    }
    if (limit) {
      params.append("limit", limit.toString());
    }

    const res = await server.get(`/products/${categoryName}`, { params });
    return res.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
