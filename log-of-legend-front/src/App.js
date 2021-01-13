import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Home from "./components/Home";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    background-image :  linear-gradient(rgba(0, 0, 0 , 0), rgba(0, 0, 0 ,1)),url(https://cdna.artstation.com/p/assets/images/images/015/610/068/large/artur-sadlos-leg-double-sh050-background-as-v003.jpg?1548955686);
    background-size : 100vw 100vh;
    background-repeat : no-repeat;
    background-color : rgb(0, 0, 0);
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Home />
    </div>
  );
};

export default App;
