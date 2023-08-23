import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAll } from "src/api/productsAPI";
import { ProductsSlice } from "src/interfaces/productsSlice.interface";

const initialState: ProductsSlice = {
  isLoading: false,
  searchQuery: "",
  productsObject: {
    products: [],
    page: null,
    limit: null,
    count: null,
    totalPages: null,
  },
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        const existingProductIds = new Set(
          state.productsObject.products.map((product) => product._id)
        );
        action.payload.products.forEach((newProduct) => {
          if (!existingProductIds.has(newProduct._id)) {
            state.productsObject.products.push(newProduct);
            existingProductIds.add(newProduct._id);
          }
        });
        state.productsObject.page = action.payload.page;
        state.productsObject.limit = action.payload.limit;
        state.productsObject.count = action.payload.count;
        state.productsObject.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { search } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
