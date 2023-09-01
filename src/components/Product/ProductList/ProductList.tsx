import React, { Suspense, useState } from "react";
import { useProducts } from "./../../../hooks/useProducts";
import Input from "@/components/Input/Input";

import {
  ListContainer,
  Container,
  SubContainer,
  PaginationArea,
} from "./styles";
import { Spinner } from "reactstrap";
import Pagination from "@/components/Pagination/Pagination";
import { useForm } from "@/contexts/FilterContext";

const LazyProductCard = React.lazy(() => import("../ProductCard/ProductCard"));

type Props = {};

const ProductList = (props: Props) => {
  const { data } = useProducts();
  const [currentPage, setCurrentPage] = useState(1); // Estado para controlar a página atual

  // Função para atualizar a página atual quando o usuário clicar em uma página na paginação
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Lógica para calcular os produtos a serem exibidos na página atual
  const productsPerPage = 12;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = data ? data.slice(startIndex, endIndex) : [];

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
    <Container fluid>
      <PaginationArea fluid="xl">
        <Input
          onChange={(e) => getSearch(e.target.value)}
          value={useContext.search}
          type="text"
          className="searchTerm"
          placeholder="Procurando por algo?"
        />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil((data?.length || 0) / productsPerPage)}
          onPageChange={handlePageChange}
        />
      </PaginationArea>
      <SubContainer fluid="xl">
        <ListContainer>
          <Suspense fallback={<Spinner>Loading...</Spinner>}>
            {productsToDisplay.map((product) => (
              <LazyProductCard
                key={product.id}
                title={product.name}
                price={product.price_in_cents}
                image={product.image_url}
                id={product.id}
              />
            ))}
          </Suspense>
        </ListContainer>
      </SubContainer>
    </Container>
  );
};

export default ProductList;
