import React, { Suspense } from "react";
import { useProducts } from "./../../../hooks/useProducts";
import { ListContainer, Container, SubContainer } from "./styles";
import { Spinner } from "reactstrap";

// Lazy load do ProductCard
const LazyProductCard = React.lazy(() => import("../ProductCard/ProductCard"));

type Props = {};

const ProductList = (props: Props) => {
  const { data } = useProducts();

  return (
    <Container fluid>
      <SubContainer fluid="xl">
        <ListContainer>
          {/* Utilizando Suspense para carregar o ProductCard de forma atrasada */}
          <Suspense fallback={<Spinner>Loading...</Spinner>}>
            {data ? (
              data.map((product) => (
                <LazyProductCard
                  key={product.id}
                  title={product.name}
                  price={product.price_in_cents}
                  image={product.image_url}
                  id={product.id}
                />
              ))
            ) : (
              <Spinner>Loading...</Spinner>
            )}
          </Suspense>
        </ListContainer>
      </SubContainer>
    </Container>
  );
};

export default ProductList;
