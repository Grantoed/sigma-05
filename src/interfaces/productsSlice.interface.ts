import { ProductsResponse } from "./productsResponse.interface";

export interface ProductsSlice {
  isLoading: boolean;
  searchQuery: string;
  productsObject: ProductsResponse;
  error: null | string;
}
