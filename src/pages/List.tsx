import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

export default function List() {
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  const [data, setData] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);

  const handleGetData = async (): Promise<void> => {
    try {
      const res: AxiosResponse<Product[]> = await axios.get(
        `https://fakestoreapi.com/products?limit=${page * 3}` // Load more data based on the page
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, [page]);

  const handleInfinite = async () => {
    try {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 1
      ) {
        setPage((prev: number) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfinite);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleInfinite);
    };
  }, []);

  return (
    <div>
      <div>
        {data &&
          data.map((e) => {
            return (
              <div
                style={{ height: "20rem", backgroundColor: "green" }}
                key={e.id}
              >
                {e.title}
              </div>
            );
          })}
      </div>
    </div>
  );
}
