import React from "react";
import * as S from "./styles";
import { ProductCard } from "../ProductCard/ProductCard";
import { produtcs } from "../../data/Products";

export const ProductsList: React.FC = () => {
  return (
    <S.Container>
      {produtcs.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
