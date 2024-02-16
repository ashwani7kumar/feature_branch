"use client";
import { useState, useEffect } from "react";
import { Product } from "../interface";
import ProductCard from "./ProductCard";
import useFetchAllProduct from "../customHooks/useFetch";
import { URL } from "../static/constant";

const HomePage = () => {
  const { data, loading, error } = useFetchAllProduct(URL.PRODUCT_API);

  if (loading) return <h1>Item Loading...</h1>;

  if (error) console.log("useFetch error: ", error);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {data.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default HomePage;
