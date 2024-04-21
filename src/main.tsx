import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./pages/errorPage.tsx";
import PaginationPage from "./pages/paginationPages";
import BookstorePage from "./pages/bookStorePages";
import WordlePage from "./pages/wordlePages";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeContent from "./components/bookstore/HomeContent.tsx";
import BooksPage from "./pages/bookStorePages/BooksPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pagination",
    element: <PaginationPage />,
  },
  {
    path: "/bookstore",
    element: <BookstorePage />,
    children: [
      {
        index: true,
        element: <HomeContent />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
    ],
  },
  {
    path: "/wordle",
    element: <WordlePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
