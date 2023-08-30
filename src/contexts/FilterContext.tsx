import { FilterType } from "@/components/enum/FilterTypeEnum";
import { PriorityTypes } from "@/components/enum/PriorityTypeEnum";
import React, { useState, createContext, ReactNode, useContext } from "react";
type MyContextData = {
  useContext: any;
  setUseContext: React.Dispatch<React.SetStateAction<any>>;
};

type MyContextProps = {
  children: ReactNode;
};

interface FilterBarValues {
  search: "";
  page: 0;
  type: FilterType;
  priority: PriorityTypes;
}

export const MyContext = createContext<MyContextData>({} as MyContextData);

export const MyContextProvider = ({ children }: MyContextProps) => {
  const [useContext, setUseContext] = useState<FilterBarValues>({
    search: "",
    page: 0,
    type: FilterType.allProducts,
    priority: PriorityTypes.NEWS,
  });

  // console.log(useContext);

  return (
    <MyContext.Provider value={{ useContext, setUseContext }}>
      {children}
    </MyContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("UseForm deve ser usado em um formProvider");
  }

  return context;
};
