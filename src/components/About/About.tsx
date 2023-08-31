"use client";

import React from "react";
import * as C from "./styles";
type Props = {
  title: string;
  text: string;
};

const About = ({ text, title }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Text>{text}</C.Text>
    </C.Container>
  );
};

export default About;
