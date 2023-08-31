"use client";
import React from "react";
import { useProducts } from "./../../../hooks/useProducts";
import { ListContainer, Container, SubContainer } from "./styles";
import ProductCard from "../ProductCard/ProductCard";
import { Spinner } from "reactstrap";

type Props = {};

const ProductList = (props: Props) => {
  const { data } = useProducts();

  return (
    <Container fluid>
      <SubContainer fluid="xl">
        <ListContainer>
          {data ? (
            data.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price_in_cents}
                image={product.image_url}
              />
            ))
          ) : (
            <Spinner>Loading...</Spinner>
          )}
        </ListContainer>
      </SubContainer>
    </Container>
  );
};

export default ProductList;
