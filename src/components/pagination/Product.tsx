import React from "react";

const Product = ({ name }: { name: string }) => {
  return <div className="ProductContainer">{name}</div>;
};

export default Product;
