import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./pages/errorPage.tsx";
import PaginationPage from "./pages/paginationPages";
import BookstorePage from "./pages/bookStorePages";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
