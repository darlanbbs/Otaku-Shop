"use client";
import ContactPage from "@/components/ContactPageComponents/ContactPage";
import DefaultPages from "@/components/DefaultPages/DefaultPages";
import React from "react";
import styled from "styled-components";

type Props = {};

const page = (props: Props) => {
  const Title = styled.h1`
    color: #2a2f4f;
    font-size: 40px;
    border-bottom: solid 3px #2a2f4f;
    font-weight: 700;
  `;
  return (
    <DefaultPages>
      <Title>Entre em contato</Title>
      <ContactPage />
    </DefaultPages>
  );
};

export default page;
