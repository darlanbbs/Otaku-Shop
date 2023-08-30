import React from "react";
import * as C from "./styles";
import { useForm } from "./../../../contexts/FilterContext";
import { FilterType } from "@/components/enum/FilterTypeEnum";

type Props = {};

const FilterByType = () => {
  const { setUseContext, useContext } = useForm();
  const handleChange = (value: FilterType) => {
    setUseContext((prev: any) => {
      return {
        ...prev,
        type: value,
      };
    });
  };
  return (
    <C.Container>
      <C.Types>
        <C.FilterItem
          onClick={() => handleChange(FilterType.allProducts)}
          selected={useContext.type === FilterType.allProducts}
        >
          Todos os Produtos
        </C.FilterItem>
        <C.FilterItem
          onClick={() => handleChange(FilterType.clothes)}
          selected={useContext.type === FilterType.clothes}
        >
          Roupas
        </C.FilterItem>
        <C.FilterItem
          onClick={() => handleChange(FilterType.acessorys)}
          selected={useContext.type === FilterType.acessorys}
        >
          Acessórios
        </C.FilterItem>
        <C.FilterItem
          onClick={() => handleChange(FilterType.figures)}
          selected={useContext.type === FilterType.figures}
        >
          Figures
        </C.FilterItem>
      </C.Types>
    </C.Container>
  );
};

export default FilterByType;
