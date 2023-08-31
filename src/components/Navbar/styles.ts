import styled from "styled-components";
import * as C from "reactstrap";

export const Navbar = styled(C.Navbar)`
  background-color: #04071d;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #fff;
    cursor: pointer;
  }
`;

export const SubNavbar = styled(C.Container)`
  width: 100vw;
  background-color: rgb(240, 240, 240);
  color: #000;
  display: flex;
  justify-content: center !important;
  align-items: center;
  a {
    color: #000;
    cursor: pointer;
  }
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
export const NavMedium = styled(C.Nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row !important;
  gap: 30px;
`;
