import { ProductsResponse } from "./productsResponse.interface";

export interface ProductsSlice {
  isLoading: boolean;
  productsObject: ProductsResponse;
  filteredProducts: ProductsResponse["products"];
  error: null | string;
}
