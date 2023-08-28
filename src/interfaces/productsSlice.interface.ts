import { ProductsResponse } from "./productsResponse.interface";

export interface ProductsSlice {
  isLoading: boolean;
  productsObject: ProductsResponse;
  error: null | string;
}
