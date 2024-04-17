import React from "react";
import "./homePage.css";
import { Link } from "react-router-dom";
import { NavigationButton } from "../../components/shared";

const homePage = () => {
  return (
    <div className="MainContainer">
      <h1>Welcome to Kevin's Bookstore</h1>
      <Link to={"/bookstore/books"}>
        <NavigationButton>Browse Books</NavigationButton>
      </Link>
    </div>
  );
};

export default homePage;
