import React from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { Product } from "../../data/Products";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <S.Card>
      <S.ProductImages src={product.image} alt=""></S.ProductImages>
      <S.ProductTitle> {product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <RiStarSFill key={index} />
            ) : (
              <RiStarSLine key={index} />
            )
          )}
          ({` ${product.rating.rate}`})
        </S.Review>
        <S.Price>{product.price}</S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCartButtonWrapper>
        <S.AddToCartButton>
          Adicionar ao carrinho
          <FiShoppingCart></FiShoppingCart>
        </S.AddToCartButton>
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};
