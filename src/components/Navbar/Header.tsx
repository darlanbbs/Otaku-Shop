"use client";
import { Black_Ops_One } from "next/font/google";
import React from "react";
import { NavbarBrand, NavItem, NavLink } from "reactstrap";
import * as C from "./styles";
import { useRouter } from "next/navigation";
import CartControl from "../CartItems/CartControl";
const BlackOpsOne = Black_Ops_One({
  subsets: ["cyrillic-ext"],
  weight: ["400"],
});
function Header(args: any) {
  const router = useRouter();

  const handleNavigate = (navigate: string) => {
    router.push(navigate);
  };
  return (
    <>
      <C.Navbar {...args}>
        <NavbarBrand
          onClick={() => handleNavigate("/")}
          className={BlackOpsOne.className}
        >
          Otaku Shop
        </NavbarBrand>
        <C.NavMedium navbar>
          <NavLink onClick={() => handleNavigate("/cart")}>
            <CartControl />
          </NavLink>
          <NavItem></NavItem>
        </C.NavMedium>
      </C.Navbar>
      <C.SubNavbar {...args} fluid>
        <NavLink onClick={() => handleNavigate("/")}>Home</NavLink>
        <NavLink onClick={() => handleNavigate("/sobre")}>Sobre</NavLink>
        <NavLink onClick={() => handleNavigate("/contact")}>Contato</NavLink>
        <NavLink onClick={() => handleNavigate("/perguntas")}>
          Perguntas
        </NavLink>
      </C.SubNavbar>
    </>
  );
}

export default Header;
