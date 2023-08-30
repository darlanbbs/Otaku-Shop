import React from "react";
import * as C from "./styles";
import { FaSearch } from "react-icons/fa";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <C.SearchContainer>
      <C.SearchInput {...props} />
      <C.SearchButton type="submit">
        <FaSearch />
      </C.SearchButton>
    </C.SearchContainer>
  );
};

export default Input;
