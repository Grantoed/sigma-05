import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAll } from "src/api/productsAPI";
import { Product } from "src/interfaces/product.interface";
import { StateInterface } from "src/interfaces/state.interface";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    searchQuery: "",
    productsArray: [],
    productsInCart: [],
    error: null,
  } as StateInterface,
  reducers: {
    search(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setProducts(state, action: PayloadAction<Product[]>) {
      state.productsArray.push(...action.payload);
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
        state.productsArray.push(...action.payload.products);
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
