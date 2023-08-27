import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchForm = styled.form``;

export const SearchLabel = styled.label`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const SearchInput = styled.input`
  width: 380px;
  height: 56px;
  padding-left: 30px;
  padding-right: 76px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${(p) => p.theme.colors.sbc};
  border-radius: ${(p) => p.theme.radii.searchBar};
  border: none;
  outline: none;
  transition: background-color var(--transition);
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.backdrop};
  }
  &::placeholder {
    font-style: italic;
    color: ${(p) => p.theme.colors.placeholder};
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: ${(p) => p.theme.colors.atc};
  border-radius: ${(p) => p.theme.radii.round};
  transition: background-color var(--transition);
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.atch};
  }
`;

export const SearchResultsWrapper = styled.div`
  position: absolute;
  top: 56px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.mbgc};
  border-bottom-left-radius: ${(p) => p.theme.radii.points};
  border-bottom-right-radius: ${(p) => p.theme.radii.points};
`;

export const SearchList = styled.ul``;

export const SearchItem = styled.li`
  padding: 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.atc};
    background-color: ${(p) => p.theme.colors.abgc};
  }
`;
