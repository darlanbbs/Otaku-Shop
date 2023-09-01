import CartPage from "@/components/CartPageComponents/CartPage";
import DefaultPages from "@/components/DefaultPages/DefaultPages";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <DefaultPages>
        <CartPage />
      </DefaultPages>
    </div>
  );
};

export default page;
