import React from "react";
import * as S from "./styles";

interface CardProps {
  showCart: boolean;
}

export const Cart: React.FC<CardProps> = ({ showCart }) => {
  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
    </S.Container>
  );
};
