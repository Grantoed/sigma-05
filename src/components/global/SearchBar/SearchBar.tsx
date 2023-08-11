import React from "react";
import { SearchWrapper, SearchInput, SearchBtn } from "./SearchBar.styled";
import { BiSearch } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchInput />
      <SearchBtn type="button">
        <BiSearch size={25} color="#fff" />
      </SearchBtn>
    </SearchWrapper>
  );
};
