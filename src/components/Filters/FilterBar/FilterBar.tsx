"use client";

import React from "react";
import { Container } from "./styles";
import FilterByType from "../FilterByType/FilterByType";
import FilterByPriority from "../FilterByPriority/FIlterByPriority";

type Props = {};

const FilterBar = (props: Props) => {
  return (
    <div>
      <Container fluid="xl">
        <FilterByType />
        <FilterByPriority />
      </Container>
      <Container fluid="xl"></Container>
    </div>
  );
};

export default FilterBar;
