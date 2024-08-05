import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";

// Componente Estilizado
// const Title = styled.h1`
//   font-size: 2rem;
//   color: blue;

function App() {
  return (
    <>
      <Header></Header>
      <ProductsList></ProductsList>
      <GlobalStyles></GlobalStyles>
    </>
  );
}

export default App;
