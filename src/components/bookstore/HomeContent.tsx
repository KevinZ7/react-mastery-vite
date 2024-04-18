import React from "react";
import { Link } from "react-router-dom";
import { NavigationButton } from "../shared";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <>
      <h1 className="HomeTitle">Welcome to Kevin's Bookstore</h1>

      <Link to={"/bookstore/books"}>
        <NavigationButton>Browse Books</NavigationButton>
      </Link>
    </>
  );
};

export default HomeContent;
