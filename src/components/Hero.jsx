import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: var(--xl-sizing);
  gap: var(--xl-sizing);
  h1 {
    color: var(--whiteColor);
    max-width: 60vw;
    text-align: center;
  }
  span {
    color: var(--whiteColor);
  }
  img {
    filter: brightness(60%);
  }
`;

function Hero({ bg, headline, title }) {
  return (
    <StyledHero>
      <img className="background" src={bg} alt="bg" />
      <span className="headline">{headline}</span>
      <h1>{title}</h1>
    </StyledHero>
  );
}

export default Hero;
