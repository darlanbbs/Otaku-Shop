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
    <div>
      <Container fluid="xl">
        <FilterByType />
        <FilterByPriority />
      </Container>
      <Container fluid="xl">
        <Input
          onChange={(e) => getSearch(e.target.value)}
          value={useContext.search}
          type="text"
          className="searchTerm"
          placeholder="Procurando por algo?"
        />
        <FilterByPriority />
      </Container>
    </div>
  );
};

export default FilterBar;
