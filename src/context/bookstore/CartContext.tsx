import { ReactNode, createContext, useState } from "react";

interface Cart {
  [bookId: string]: CartBook;
}

interface CartBook {
  id: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
}

interface CartContextType {
  cart: Cart;
  showCart: boolean;
  toggleShowCart: () => void;
  addToCart: (book: Book) => void;
  removeFromCart: (book: Book) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({});
  const [showCart, setShowCart] = useState<boolean>(false);

  const toggleShowCart = () => {
    setShowCart((prev) => !prev);
  };

  const addToCart = (book: Book) => {
    const { id } = book;
    if (id in cart) {
      setCart((prev) => {
        return {
          ...prev,
          [id]: {
            ...prev[id],
            quantity: prev[id].quantity + 1,
          },
        };
      });
    } else {
      setCart((prev) => {
        return {
          ...prev,
          [id]: {
            id: id,
            title: book.title,
            author: book.author,
            price: book.price,
            quantity: 1,
          },
        };
      });
    }
  };

  const removeFromCart = (book: Book) => {
    const { id } = book;
    if (id in cart) {
      const newQuantity = cart[id].quantity - 1;

      if (newQuantity <= 0) {
        const newCart = { ...cart };
        delete newCart[id];
        setCart(newCart);
      } else {
        setCart((prev) => ({
          ...prev,
          [id]: {
            ...prev[id],
            quantity: newQuantity,
          },
        }));
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        showCart,
        toggleShowCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
