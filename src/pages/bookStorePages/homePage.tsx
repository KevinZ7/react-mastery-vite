import "./homePage.css";
import { Outlet } from "react-router-dom";
import CartProvider from "../../context/bookstore/CartContext";
import Cart from "../../components/bookstore/Cart";
import { BookStoreHeader } from "../../components/bookstore";

const homePage = () => {
  return (
    <div className="MainContainer">
      <CartProvider>
        <BookStoreHeader />
        <Cart />
        <Outlet />
      </CartProvider>
    </div>
  );
};

export default homePage;
