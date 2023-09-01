import { useLocalStorage } from "@/hooks/useLocalStorage";
import React from "react";
import CartIcon from "./CartIcon";
import * as C from "./styles";

const CartControl = () => {
  const { value } = useLocalStorage("cart-items", []);
  console.log(value, "value");
  return (
    <C.Container>
      <CartIcon />
      {value.length > 0 && <C.CartCount>{value.length}</C.CartCount>}
    </C.Container>
  );
};

export default CartControl;
