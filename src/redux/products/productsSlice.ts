import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAll } from "src/api/productsAPI";
import { Product } from "src/interfaces/product.interface";
import { StateInterface } from "src/interfaces/state.interface";

const initialState: StateInterface = {
  isLoading: false,
  searchQuery: "",
  productsObject: {
    products: [],
    page: null,
    limit: null,
    count: null,
    totalPages: null,
  },
  productsInCart: [],
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    addToCart(state, action: PayloadAction<Product>) {
      state.productsInCart.unshift(action.payload);
    },
    removeFromCart(state, action: PayloadAction<Product>) {
      const index = state.productsInCart.indexOf(action.payload);
      if (index > -1) {
        state.productsInCart.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.productsObject.products.push(...action.payload.products);
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

export const { search, addToCart, removeFromCart } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
