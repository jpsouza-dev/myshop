// import React from "react";
import { useState } from "react";
import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const isLogged = true;

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>My Shop</S.HeaderTitle>
        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart></FiShoppingCart>
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
