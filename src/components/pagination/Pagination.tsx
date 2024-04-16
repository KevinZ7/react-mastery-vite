import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Pagination.css";

interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const PAGE_LIMIT = 9;
const TOTAL_LIMIT = 36;

const Pagination = () => {
  const [productsData, setProductsData] = useState<ProductData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products?limit=${TOTAL_LIMIT}`
        );
        const data = await res.json();
        setProductsData(data.products);
      } catch (e) {
        setError(
          e instanceof Error
            ? e.message
            : "fetching products: an unknown error has occured"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const productsOnPageStartingIndex = (currentPage - 1) * PAGE_LIMIT;
  const productsOnPageEndingIndex = productsOnPageStartingIndex + PAGE_LIMIT;
  const totalPageCount = Math.floor(
    (productsData ? productsData.length : 0) / PAGE_LIMIT
  );

  const changePageHandler = (idx: number) => {
    setCurrentPage(idx + 1);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <>
          <div className="ProductsContainer">
            {productsData
              ?.slice(productsOnPageStartingIndex, productsOnPageEndingIndex)
              .map((product) => {
                return <Product key={product.id} name={product.title} />;
              })}
          </div>

          <div className="Pages">
            {[...Array(totalPageCount)].map((_, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor:
                      idx === currentPage - 1 ? "#FFC470" : "#C0D6E8",
                  }}
                  onClick={() => changePageHandler(idx)}
                  className="PageNumber"
                >
                  {idx + 1}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Pagination;
