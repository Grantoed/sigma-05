import { Product } from "./product.interface";

export interface ProductsResponse {
  products: Product[];
  page: number;
  limit: number;
  count: number;
  totalPages: number;
}
