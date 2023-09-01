import { useRouter } from "next/navigation";
import React from "react";
import { Card } from "./styles";
interface ProductCard {
  image: string;
  title: string;
  price: number;
  id: string;
}

const ProductCard = ({ image, title, price, id }: ProductCard) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/product?id=" + id);
  };
  const formatCurrency = (value: any) => {
    const formattedValue = (value / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formattedValue;
  };
  const newPrice = formatCurrency(price);
  return (
    <Card onClick={handleNavigate}>
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
