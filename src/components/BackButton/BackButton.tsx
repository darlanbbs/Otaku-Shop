"use client";
import styled from "styled-components";

import React from "react";

interface BtnProps {
  navigate: string;
}

import { useRouter } from "next/navigation";

const BackButtonStyled = styled.button`
  position: absolute;
  left: 20px;
  top: 100px;
  padding: 10px;
  background-color: #ccc;
  color: black;
  border: none;
  cursor: pointer;
  margin: 20px;
`;
const BackButton = ({ navigate }: BtnProps) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(navigate);
  };

  return <BackButtonStyled onClick={handleNavigate}> Voltar</BackButtonStyled>;
};

export default BackButton;
