import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { SuccessfulOrder } from "./pages/SuccessfulOrder";
import { SharedLayout } from "./pages/SharedLayout";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { Admin } from "./pages/Admin";
import { NotFound } from "./pages/NotFound";
import { Notification } from "./components/global/Notification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/successful-order" element={<SuccessfulOrder />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Notification />
    </>
  );
}

export default App;
