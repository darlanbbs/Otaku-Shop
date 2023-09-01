"use client";
import React from "react";
import {
  CartList,
  CartListContainer,
  CartResultContainer,
  StyledButton,
  TotalItem,
} from "./styles";
import BackButton from "../BackButton/BackButton";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "../Interfaces/Interfaces";
import { CartItem } from "../CartItems/CartItem";

type Props = {};

const CartPage = (props: Props) => {
  const formatCurrency = (value: any) => {
    const formattedValue = (value / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formattedValue;
  };
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    "cart-items",
    []
  );

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };

  const cartTotal = formatCurrency(calculateTotal(value));
  const refatoredValue = 0;
  const cartTotalWithDelivery = formatCurrency(
    calculateTotal(value) + refatoredValue
  );
  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  };

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
  };

  return (
    <div>
      <CartListContainer>
        <BackButton navigate="/" />
        <h3>Seu carrinho</h3>
        <p>
          Total {value.length} produtos
          <span>{cartTotal}</span>
        </p>
        <CartList>
          {value.map((item) => (
            <CartItem
              product={item}
              key={item.id}
              handleDelete={handleDeleteItem}
              handleUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </CartList>
      </CartListContainer>
      <CartResultContainer>
        <h3>Resumo do Pedido</h3>
        <TotalItem>
          <p>Subtotal de produtos</p>
          <p>{cartTotal}</p>
        </TotalItem>
        <TotalItem>
          <p>Entrega</p>
          <p>{formatCurrency(refatoredValue)}</p>
        </TotalItem>
        <TotalItem>
          <p>Total</p>
          <p>{cartTotalWithDelivery}</p>
        </TotalItem>
        <StyledButton>FINALIZAR COMPRA</StyledButton>
      </CartResultContainer>
    </div>
  );
};

export default CartPage;
