"use client";

import DefaultPages from "@/components/DefaultPages/DefaultPages";
import ProductPageComponents from "@/components/ProductPageComponents/ProductPageComponents";
import { useProduct } from "@/hooks/useProduct";
import React from "react";

type Props = {
  searchParams: {
    id: string;
  };
};

const page = ({ searchParams }: Props) => {
  const { data } = useProduct(searchParams.id);

  console.log(data);
  return (
    <DefaultPages>
      <ProductPageComponents
        img={data?.image_url}
        title={data?.name}
        price={data?.price_in_cents}
        text={data?.description}
        type={data?.category}
      />
    </DefaultPages>
  );
};

export default page;
