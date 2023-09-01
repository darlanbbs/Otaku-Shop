import { useLocalStorage } from "@/hooks/useLocalStorage";
import React from "react";
import CartIcon from "./CartIcon";
import * as C from "./styles";
import { useRouter } from "next/navigation";

const CartControl = () => {
  const { value } = useLocalStorage("cart-items", []);
  const router = useRouter();
  const handleNavigateToCart = () => {
    router.push("/cart");
  };
  return (
    <C.Container onClick={() => handleNavigateToCart()}>
      <CartIcon />
      {value.length > 0 && <C.CartCount>{value.length}</C.CartCount>}
    </C.Container>
  );
};

export default CartControl;
