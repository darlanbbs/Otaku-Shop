"use client";

import DefaultPages from "@/components/DefaultPages/DefaultPages";
import ProductPageComponents from "@/components/ProductPageComponents/ProductPageComponents";
import { useProduct } from "@/hooks/useProduct";
import React, { useState, useEffect } from "react";

type Props = {
  searchParams: {
    id: string;
  };
};

const Page = ({ searchParams }: Props) => {
  const { data } = useProduct(searchParams.id);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (data?.image_url) {
      const image = new Image();
      image.src = data.image_url;
      image.onload = () => {
        setImageLoaded(true);
      };
    }
  }, [data?.image_url]);

  const handleAddToCart = () => {
    let cartItems = localStorage.getItem("cart-items");
    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === searchParams.id
      );

      if (existingProductIndex !== -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id });
      }

      localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
    } else {
      const newCart = [{ ...data, quantity: 1, id: searchParams.id }];
      localStorage.setItem("cart-items", JSON.stringify(newCart));
    }
  };

  return (
    <DefaultPages>
      <ProductPageComponents
        img={imageLoaded ? data?.image_url || "" : ""}
        title={data?.name || ""}
        price={data?.price_in_cents || 0}
        text={data?.description || ""}
        type={data?.category || ""}
        handleChange={handleAddToCart}
      />
    </DefaultPages>
  );
};

export default Page;
