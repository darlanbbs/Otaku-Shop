import styled from "styled-components";
import * as C from "reactstrap";

export const Container = styled(C.Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 35px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`;
