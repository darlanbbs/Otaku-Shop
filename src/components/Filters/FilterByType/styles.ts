import styled from "styled-components";
import * as C from "reactstrap";

interface FilterItemProps {
  selected: boolean;
}

export const Container = styled(C.Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Types = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

export const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: ${(props) => (props.selected ? "18px" : "16px")};
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  color: ${(props) => (props.selected ? "#04071d" : "#737380")};

  border-bottom: ${(props) => (props.selected ? "4px solid #04071d" : "")};
`;
