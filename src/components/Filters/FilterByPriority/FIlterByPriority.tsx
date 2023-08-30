import React from "react";
import { useForm } from "./../../../contexts/FilterContext";
import { useState } from "react";
import { PriorityTypes } from "@/components/enum/PriorityTypeEnum";
import * as C from "./styles";

const FilterByPriority = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);
  const { setUseContext } = useForm();

  const handleChange = (value: PriorityTypes) => {
    setUseContext((prev: any) => {
      return {
        ...prev,
        priority: value,
      };
    });
    setIsOpen(false);
  };
  return (
    <>
      <C.StyledButton onClick={handleOpen}>Organizar Por</C.StyledButton>
      {isOpen && (
        <C.PriorityFilter>
          <li onClick={() => handleChange(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleChange(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleChange(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onCanPlay={() => handleChange(PriorityTypes.POPULARITY)}>
            Mais Vendidos
          </li>
        </C.PriorityFilter>
      )}
    </>
  );
};

export default FilterByPriority;
