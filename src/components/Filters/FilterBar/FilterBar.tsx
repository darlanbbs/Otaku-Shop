"use client";

import React from "react";
import { Container } from "./styles";
import FilterByType from "../FilterByType/FilterByType";
import FilterByPriority from "../FilterByPriority/FIlterByPriority";
import Input from "@/components/Input/Input";
import { useForm } from "@/contexts/FilterContext";

type Props = {};

const FilterBar = (props: Props) => {
  const { setUseContext, useContext } = useForm();

  function getSearch(value: string) {
    setUseContext((prev: any) => {
      return {
        ...prev,
        search: value,
      };
    });
  }

  return (
    <Container fluid="xl">
      <FilterByType />
      <Input
        onChange={(e) => getSearch(e.target.value)}
        value={useContext.search}
        type="text"
        className="searchTerm"
        placeholder="Procurando por algo?"
      />
      <FilterByPriority />
    </Container>
  );
};

export default FilterBar;
