import { useLocalStorage } from "@/hooks/useLocalStorage";
import React from "react";
import CartIcon from "./CartIcon";
import * as C from "./styles";

const CartControl = () => {
  const { value } = useLocalStorage("cart-items", []);
  return (
    <C.Container>
      <CartIcon />
      <C.CartCount>0</C.CartCount>
    </C.Container>
  );
};

export default CartControl;
