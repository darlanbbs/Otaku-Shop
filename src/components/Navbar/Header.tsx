"use client";
import { Black_Ops_One } from "next/font/google";
import React from "react";
import { NavbarBrand, NavItem, NavLink } from "reactstrap";
import * as C from "./styles";
import Input from "../Input/Input";
import CartControl from "../CartItems/CartControl";
const BlackOpsOne = Black_Ops_One({
  subsets: ["cyrillic-ext"],
  weight: ["400"],
});
function Header(args: any) {
  return (
    <header>
      <C.Navbar {...args}>
        <NavbarBrand href="/" className={BlackOpsOne.className}>
          Otaku Shop
        </NavbarBrand>
        <C.NavMedium navbar>
          <NavLink href="">
            <CartControl />
          </NavLink>
          <NavItem></NavItem>
        </C.NavMedium>
      </C.Navbar>
      <C.SubNavbar {...args} fluid>
        <NavLink href="/">Home</NavLink>
        <NavLink href="">Roupas</NavLink>
        <NavLink href="">Figures</NavLink>
        <NavLink href="">Acessórios</NavLink>
      </C.SubNavbar>
    </header>
  );
}

export default Header;
