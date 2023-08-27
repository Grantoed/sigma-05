import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllProducts, FetchAllArgs } from "src/api/productsAPI";
import { ProductsResponse } from "src/interfaces/productsResponse.interface";

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
