import styled from "styled-components";
import * as C from "reactstrap";

export const Container = styled(C.Container)`
  background-color: rgb(240, 240, 240);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const SubContainer = styled(C.Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;