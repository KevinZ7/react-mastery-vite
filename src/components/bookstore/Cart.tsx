import useCart from "../../hooks/bookStore/useCart";
import "./Cart.css";

const Cart = () => {
  const { showCart, cart } = useCart();

  if (!showCart) return null;

  return (
    <div className="CartContainer">
      {Object.keys(cart).map((key) => (
        <div key={key} className="CartBook">
          <h2>{cart[key].title}</h2>
          <p>{cart[key].author}</p>
          <p>{cart[key].quantity}</p>
          <p>Total Price: {cart[key].quantity * cart[key].price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
