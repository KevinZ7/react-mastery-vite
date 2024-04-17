import React from "react";
import { Link } from "react-router-dom";

const errorPage = () => {
  return (
    <div>
      <p>You've encountered an error, please go back to home</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default errorPage;
