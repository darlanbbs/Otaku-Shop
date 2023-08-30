import styled from "styled-components";

export const SearchWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 350px;
  border: 3px solid #000000;
  border-right: none;
  padding: 5px;
  height: 36px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;

  &:focus {
    color: #000000;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid #000000;
  background: #000000;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
