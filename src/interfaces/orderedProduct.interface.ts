export interface OrderedProduct {
  _id: string;
  name: string;
  imageURL: string;
  category: string;
  inStock: number;
  priceOld?: number;
  price: number;
  quantity: number;
}
