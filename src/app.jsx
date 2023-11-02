import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Page1 from "./pages/Page1";
import Home from "./Home";

const StyledHome = styled.div`
  h1 {
    font-size: 300px;
    color: var(--txtColor);
  }
`;

function App() {
  return (
    <StyledHome>
      <h1>Hello</h1>
    </StyledHome>
  );
}

export default App;
