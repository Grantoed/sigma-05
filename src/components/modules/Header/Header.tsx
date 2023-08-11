import React from "react";
import { BiCart } from "react-icons/bi";
import { Container } from "src/components/global/Container";
import { Logo } from "src/components/global/Logo";
import { SearchBar } from "src/components/global/SearchBar";
import {
  Navigation,
  NavigationList,
  NavigationItem,
  NavigationLink,
  Cart,
  CartIcon,
  CartText,
} from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={40}
        px={160}
      >
        <Logo />
        <Navigation>
          <NavigationList>
            <NavigationItem>
              <NavigationLink to="/">Home</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/about">About</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/pages">Pages</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/shop">Shop</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/projects">Projects</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/news">News</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </Navigation>
        <SearchBar />
        <Cart>
          <CartIcon>
            <BiCart size={25} color="#fff" />
          </CartIcon>
          <CartText>Cart (0)</CartText>
        </Cart>
      </Container>
    </header>
  );
};
