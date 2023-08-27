import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { useProductModal } from "src/hooks/useProductModal";
import { AppDispatch } from "src/redux/store";
import { ProductModal } from "src/components/global/ProductModal";
import { BiSearch } from "react-icons/bi";
import { Portal } from "src/components/global/Portal";
import { fetchAllProducts, searchProducts } from "src/api/productsAPI";
import { ProductsResponse } from "src/interfaces/productsResponse.interface";
import {
  SearchWrapper,
  SearchForm,
  SearchLabel,
  SearchInput,
  SearchButton,
  SearchResultsWrapper,
  SearchList,
  SearchItem,
} from "./SearchBar.styled";

export const SearchBar = () => {
  const [searchResults, setSearchResults] = useState<
    ProductsResponse["products"]
  >([]);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const resultsWrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsWrapper.current &&
        !resultsWrapper.current.contains(event.target as Node)
      ) {
        resultsWrapper.current.style.display = "none";
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const { selectedProduct, isModalOpen, openModalWithProduct, closeModal } =
    useProductModal();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as typeof e.target & {
      search: { value: string };
    };
    if (form.search.value) {
      dispatch(searchProducts({ q: form.search.value }));
    }
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;

    if (resultsWrapper.current) {
      resultsWrapper.current.style.display = "block";
    }

    const { products } = await fetchAllProducts({
      q: searchQuery,
      limit: "5",
    });
    setSearchResults(products);

    if (!e.target.value.length) {
      setSearchResults([]);
    }
  };

  return (
    <SearchWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchLabel htmlFor="search">Search</SearchLabel>
        <SearchInput id="search" onChange={handleInput} />
        <SearchButton type="submit" aria-label="Search button">
          <BiSearch size={25} color="#fff" />
        </SearchButton>
      </SearchForm>
      {searchResults.length > 0 && (
        <SearchResultsWrapper ref={resultsWrapper}>
          <SearchList>
            {searchResults.map((product) => (
              <SearchItem
                key={product._id}
                onClick={() => openModalWithProduct(product)}
              >
                {product.name}
              </SearchItem>
            ))}
          </SearchList>
        </SearchResultsWrapper>
      )}
      {isModalOpen && selectedProduct && (
        <Portal onClose={closeModal}>
          <ProductModal
            onClose={closeModal}
            selectedProduct={selectedProduct}
          />
        </Portal>
      )}
    </SearchWrapper>
  );
};
