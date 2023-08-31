"use client";

import React from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";

type Props = {
  id: string;
  title: string;
  text: string;
};

const Accordions = ({ id, title, text }: Props) => {
  return (
    <div>
      <UncontrolledAccordion
        defaultOpen={[id]}
        stayOpen
        style={{ width: "1250px" }}
      >
        <AccordionItem>
          <AccordionHeader targetId={id}>{title}</AccordionHeader>
          <AccordionBody accordionId={id}>
            <strong>{text}</strong>
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </div>
  );
};

export default Accordions;
