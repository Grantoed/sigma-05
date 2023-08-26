import React from "react";
import {
  SearchWrapper,
  SearchLabel,
  SearchInput,
  SearchButton,
} from "./SearchBar.styled";
import { BiSearch } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchLabel htmlFor="search">Search</SearchLabel>
      <SearchInput id="search" />
      <SearchButton type="button" aria-label="Search button">
        <BiSearch size={25} color="#fff" />
      </SearchButton>
    </SearchWrapper>
  );
};
