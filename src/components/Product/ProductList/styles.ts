import { styled } from "styled-components";
import * as C from "reactstrap";

export const Container = styled(C.Container)`
  background-color: rgb(240, 240, 240);
  margin-top: 35px;
`;
export const SubContainer = styled(C.Container)`
  background-color: rgb(240, 240, 240);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;

  margin-top: 32px;
`;

export const PaginationArea = styled(C.Container)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
