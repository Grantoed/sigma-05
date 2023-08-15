import { Product } from "./product.interface";

export interface StateInterface {
  isLoading: boolean;
  searchQuery: string;
  productsArray: Product[];
  productsInCart: Product[];
  error: null | string;
}
