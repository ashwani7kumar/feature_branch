import { useEffect, useState } from "react";
import { Product, ProductDetails } from "../interface";

const useFetchAllProduct = (url: string) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(url);
      const res = await response.json();
      if (res) {
        setData(res);
      } else {
        setError("data not found");
      }
      setLoading(false);
    };
    getProducts();
  }, [url]);

  return { data, loading, error };
};

const useFetchSingleProduct = (url: string) => {
  const initialState = {
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "",
  };

  const [data, setData] = useState<ProductDetails>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(url);
      const res = await response.json();
      if (res) {
        setData(res);
      } else {
        setError("data not found");
      }
      setLoading(false);
    };
    getProducts();
  }, [url]);

  return { data, loading, error };
};

export default useFetchAllProduct;
export { useFetchSingleProduct };
