"use client";
import React from "react";
import { Button, FormContainer, TextArea } from "./styles";
import { Input, Label } from "reactstrap";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <FormContainer>
      <Label htmlFor="name">Nome:</Label>
      <Input type="text" id="name" required />

      <Label htmlFor="email">E-mail:</Label>
      <Input type="email" id="email" required />

      <Label htmlFor="description">Descrição:</Label>
      <TextArea id="description" required />

      <Button type="submit">Enviar</Button>
    </FormContainer>
  );
};

export default ContactPage;
