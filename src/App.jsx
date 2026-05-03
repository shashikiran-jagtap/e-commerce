import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
