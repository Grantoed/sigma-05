import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { SuccessfulOrder } from "./pages/SuccessfulOrder";
import { SharedLayout } from "./pages/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/successful-order" element={<SuccessfulOrder />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
