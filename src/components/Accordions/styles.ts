import * as C from "reactstrap";
import styled from "styled-components";

export const UncontrolledAccordion = styled(C.UncontrolledAccordion)`
  width: 1250px;

  @media (max-width: 1440px) {
    width: 968px;
  }
  @media (max-width: 968px) {
    width: 768px;
  }
  @media (max-width: 760px) {
    width: 480px;
  }
`;
