import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "src/api/productsAPI";
import { searchProducts } from "src/redux/operations";
import { useProductModal } from "src/hooks/useProductModal";
import {
  selectSearchQuery,
  inputSearch,
  resetSearch,
} from "src/redux/products";
import { AppDispatch } from "src/redux/store";
import { ProductModal } from "src/components/global/ProductModal";
import { BiSearch } from "react-icons/bi";
import { Portal } from "src/components/global/Portal";
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
  const searchQuery = useSelector(selectSearchQuery);

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
    dispatch(inputSearch(e.target.value));

    if (resultsWrapper.current) {
      resultsWrapper.current.style.display = "block";
    }

    const { products } = await fetchAllProducts({
      q: e.target.value,
      limit: "5",
    });
    setSearchResults(products);

    if (!e.target.value) {
      setSearchResults([]);
      dispatch(resetSearch());
    }
  };

  return (
    <SearchWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchLabel htmlFor="search">Search</SearchLabel>
        <SearchInput
          id="search"
          value={searchQuery}
          onChange={handleInput}
          placeholder="Enter item name or category"
        />
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
