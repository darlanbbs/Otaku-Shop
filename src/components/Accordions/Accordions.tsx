"use client";
import * as C from "./styles";
import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

type Props = {
  id: string;
  title: string;
  text: string;
};

const Accordions = ({ id, title, text }: Props) => {
  return (
    <div>
      <C.UncontrolledAccordion defaultOpen={[id]} stayOpen>
        <AccordionItem>
          <AccordionHeader targetId={id}>{title}</AccordionHeader>
          <AccordionBody accordionId={id}>
            <strong>{text}</strong>
          </AccordionBody>
        </AccordionItem>
      </C.UncontrolledAccordion>
    </div>
  );
};

export default Accordions;
