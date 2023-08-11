import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const NavigationItem = styled.li``;

export const NavigationLink = styled(NavLink)`
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

export const Cart = styled.div`
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
