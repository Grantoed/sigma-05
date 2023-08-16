import { Product } from "./product.interface";

export interface ProductsResponse {
  products: Product[];
  page: number | null;
  limit: number | null;
  count: number | null;
  totalPages: number | null;
}
