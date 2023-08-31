import React from "react";
import { Card } from "./styles";
interface ProductCard {
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({ image, title, price }: ProductCard) => {
  const formatCurrency = (value: any) => {
    const formattedValue = (value / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formattedValue;
  };
  const newPrice = formatCurrency(price);
  return (
    <Card>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <div></div>
        <p>{newPrice}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
