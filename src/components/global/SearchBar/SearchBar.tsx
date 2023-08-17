import React from "react";
import { SearchWrapper, SearchInput, SearchButton } from "./SearchBar.styled";
import { BiSearch } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchInput />
      <SearchButton type="button">
        <BiSearch size={25} color="#fff" />
      </SearchButton>
    </SearchWrapper>
  );
};
