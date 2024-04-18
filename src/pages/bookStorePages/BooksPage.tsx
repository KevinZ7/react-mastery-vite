import { useEffect, useState } from "react";
import { Book } from "../../context/bookstore/CartContext";
import booksData from "../../store/bookStore/data.json";
import "./BooksPage.css";
import useCart from "../../hooks/bookStore/useCart";
const BooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const newBooks = booksData.map(
      (book): Book => ({
        id: book.id,
        author: book.author,
        title: book.title,
        price: book.price,
      })
    );

    setBooks(newBooks);
  }, []);

  return (
    <div className="BooksContainer">
      {books.map((book, idx) => {
        return (
          <div key={idx} className="BookContainer">
            <p>ID: {book.id}</p>
            <p>Author: {book.author}</p>
            <p>Title: {book.title}</p>
            <p>Price: {book.price}</p>
            <button onClick={() => addToCart(book)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default BooksPage;
