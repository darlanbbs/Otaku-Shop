"use client";

import React from "react";
import * as C from "./styles";
type Props = {
  children: React.ReactNode;
};

const DefaultPages = ({ children }: Props) => {
  return (
    <C.Container fluid>
      <C.SubContainer fluid="xl">{children}</C.SubContainer>
    </C.Container>
  );
};

export default DefaultPages;
