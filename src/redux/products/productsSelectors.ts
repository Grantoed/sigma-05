import { Product } from "src/interfaces/product.interface";
import { ProductsResponse } from "src/interfaces/productsResponse.interface";
import { RootState } from "../store";

export const selectIsLoading = (state: RootState): boolean =>
  state.products.isLoading;
export const selectSearchQuery = (state: RootState): string =>
  state.products.searchQuery;
export const selectProductsObject = (state: RootState): ProductsResponse =>
  state.products.productsObject;
export const selectProductsInCart = (state: RootState): Product[] | [] =>
  state.products.productsInCart;
export const selectError = (state: RootState): string => state.products.error;
export const selectProductCount = (state: RootState): number =>
  state.products.productsObject.count;
