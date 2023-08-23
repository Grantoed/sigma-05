import React from "react";
import { PageBanner } from "src/components/global/PageBanner";
import { Order } from "src/components/modules/Order";
import cartImg from "src/images/cart.jpg";

const Cart = () => {
  return (
    <>
      <PageBanner backgroundImage={cartImg}>Cart</PageBanner>
      <Order />
    </>
  );
};

export default Cart;
