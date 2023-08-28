import { useState } from "react";
import { Product } from "src/interfaces/product.interface";

export const useProductModal = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalWithProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return {
    selectedProduct,
    isModalOpen,
    setIsModalOpen,
    openModalWithProduct,
    closeModal,
  };
};
