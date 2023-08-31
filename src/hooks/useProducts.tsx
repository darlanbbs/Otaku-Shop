import { ProductsFetchResponse } from "@/components/Interfaces/Interfaces";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useForm } from "./../contexts/FilterContext";
import { mountQuery } from "@/components/Product/ProductFunctions/ProductFunctions";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, { query });
};

export function useProducts() {
  const { useContext } = useForm();
  const query = mountQuery(useContext.type, useContext.priority);
  const searchDeffered = useDeferredValue(useContext.search);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", useContext.type, useContext.priority],
    staleTime: 1000 * 60 * 1,
  });

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchDeffered.toLowerCase())
  );
  return {
    data: filteredProducts,
  };
}
