"use client";

import Accordions from "@/components/Accordions/Accordions";
import DefaultPages from "@/components/DefaultPages/DefaultPages";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: #2a2f4f;
  font-size: 40px;
  border-bottom: solid 3px #2a2f4f;
  font-weight: 700;
`;
type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <DefaultPages>
        <Title>Perguntas Frequentes</Title>
        <Accordions
          id="1"
          title="Como posso realizar uma compra?"
          text="Para fazer uma compra, basta navegar pelo nosso site, escolher os produtos que lhe interessam e adicioná-los ao carrinho de compras. Em seguida, siga os passos do processo de pagamento para concluir o seu pedido."
        />
        <Accordions
          id="2"
          title="Quais os metodos de pagamentos?"
          text="No momento, aceitamos pagamentos por meio de transferências. Durante o processo de pagamento, você poderá escolher para qual instituição bancária fazer o depósito."
        />
        <Accordions
          id="3"
          title="Quanto tempo até meu pedido chegar?"
          text="O tempo de entrega pode variar conforme a sua localização e o método de envio selecionado. Geralmente, processamos os pedidos em 1-2 dias úteis e o tempo de envio pode variar entre 3 e 7 dias úteis, dependendo do destino."
        />
        <Accordions
          id="4"
          title="Posso fazer devoluções?"
          text="Sim, aceitamos trocas e devoluções dentro de um período determinado. Recomendamos que você revise nossa política de trocas e devoluções em nosso site para obter mais detalhes sobre o processo e os requisitos."
        />
        <Accordions
          id="5"
          title="Posso fazer devoluções?"
          text="Sim, temos uma equipe amigável de atendimento ao cliente pronta para ajudar. Você pode entrar em contato conosco por meio do nosso formulário de contato, e-mail ou número de telefone fornecidos em nosso site."
        />
      </DefaultPages>
    </div>
  );
};

export default page;
