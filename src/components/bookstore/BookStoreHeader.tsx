import { Link } from "react-router-dom";
import useCart from "../../hooks/bookStore/useCart";
import { NavigationButton } from "../shared";
import "./BookStoreHeader.css";
const BookStoreHeader = () => {
  const { toggleShowCart } = useCart();
  return (
    <div className="BookstoreHeader">
      <Link to="/">
        <NavigationButton>Go Back to to store main page</NavigationButton>
      </Link>
      <button className="CartButton" onClick={toggleShowCart}>
        🛒Cart
      </button>
    </div>
  );
};

export default BookStoreHeader;
