import React from "react";
import { Route, Routes } from "react-router-dom";
import { ScrollRestoration } from "./components/global/ScrollRestoration";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { SuccessfulOrder } from "./pages/SuccessfulOrder";
import { SharedLayout } from "./pages/SharedLayout";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { Projects } from "./pages/Projects";
import { News } from "./pages/News";
import { NotFound } from "./pages/NotFound";
import { Admin } from "./pages/Admin";
import { Notification } from "./components/global/Notification";

function App() {
  return (
    <>
      <ScrollRestoration>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/successful-order" element={<SuccessfulOrder />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </ScrollRestoration>
      <Notification />
    </>
  );
}

export default App;
