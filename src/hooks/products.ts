import { IPRODUCT } from "../models";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
export function useProducts() {
  const [products, setProducts] = useState<IPRODUCT[]>([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  function addProduct(product: IPRODUCT) {
    setProducts((prev) => [...prev, product]);
  }

  async function fetchProducts() {
    try {
      setError("");
      setLoad((prev) => true);
      const data = await axios.get<IPRODUCT[]>("https://fakestoreapi.com/products?limit=4");
      setProducts([...data.data]);
      setLoad((prev) => false);
    } catch (e) {
      const error = e as AxiosError;
      setLoad((prev) => false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, load, addProduct };
}
