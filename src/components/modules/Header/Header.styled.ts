import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${(p) => p.theme.colors.mbgc};
  z-index: 5;
`;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const NavigationItem = styled.li``;

export const NavigationLink = styled(NavLink)`
  padding: 10px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mtc};
  transition: color var(--transition);
  &:hover,
  &:focus,
  &.active {
    color: ${(p) => p.theme.colors.atc};
  }
`;

export const Cart = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 6px;
  padding-right: 23px;
  border: 1px solid #e0e0e0;
  border-radius: ${(p) => p.theme.radii.cart};
  cursor: pointer;
`;

export const CartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  background-color: ${(p) => p.theme.colors.mtc};
  border-radius: ${(p) => p.theme.radii.round};
  transition: all var(--transition);
  ${Cart}:hover &,
  ${Cart}:focus-within & {
    background-color: ${(p) => p.theme.colors.mtch};
  }
`;

export const CartText = styled.p`
  font-family: ${(p) => p.theme.fonts.tf};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  color: ${(p) => p.theme.colors.mtc};
  transition: all var(--transition);
  ${Cart}:hover &,
  ${Cart}:focus-within & {
    color: ${(p) => p.theme.colors.mtch};
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  left: -50%;
  display: none;
  width: 220px;
  background-color: ${(p) => p.theme.colors.mbgc};
  border-bottom-left-radius: ${(p) => p.theme.radii.points};
  border-bottom-right-radius: ${(p) => p.theme.radii.points};
`;

export const Dropdown = styled.div`
  position: relative;
  &:hover ${DropdownList} {
    display: block;
  }
`;

export const DropdownButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mtc};
  &:hover,
  &:focus {
    cursor: default;
  }
  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    margin-top: 5px;
    margin-left: 8px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    transform: rotate(135deg);
  }
`;

export const DropdownItem = styled.li``;

export const DropdownLink = styled(NavLink)`
  display: block;
  padding: 20px;
  width: 100%;
  font-family: ${(p) => p.theme.fonts.mtf};
  font-size: ${(p) => p.theme.fontSizes[2]};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.mtc};
  transition: all var(--transition);
  &:hover,
  &:focus,
  &.active {
    color: ${(p) => p.theme.colors.atc};
    background-color: ${(p) => p.theme.colors.abgc};
  }
`;
