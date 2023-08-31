"use client";
import React from "react";
import * as C from "./styles";
import BackButton from "../BackButton/BackButton";

type ProductPageProps = {
  img: string;
  title: string;
  price: number;
  text: string;
  type: string;
};

const ProductPageComponents = ({
  img,
  title,
  price,
  text,
  type,
}: ProductPageProps) => {
  const formatCurrency = (value: any) => {
    const formattedValue = (value / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formattedValue;
  };
  const newPrice = formatCurrency(price);
  return (
    <C.Container>
      <BackButton navigate="/" />
      <C.SubContainer>
        <C.Image src={img} alt={title} />
        <div>
          <C.Title>{title}</C.Title>
          <C.Price>{type}</C.Price>
          <C.Price>{newPrice}</C.Price>
          <C.Description>{text}</C.Description>
          <C.BuyButtonArea>
            <C.BuyButton>Comprar</C.BuyButton>
          </C.BuyButtonArea>
        </div>
      </C.SubContainer>
    </C.Container>
  );
};

export default ProductPageComponents;
