import { Product } from "./product.interface";
import { ProductsResponse } from "./productsResponse.interface";

export interface StateInterface {
  isLoading: boolean;
  searchQuery: string;
  productsObject: ProductsResponse;
  productsInCart: Product[];
  error: null | string;
}
