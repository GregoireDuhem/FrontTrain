import React from "react";
import styled from "styled-components";

const StyledCanvaImg = styled.div`
  position: relative;
  margin: var(--paddingPage) 0;
  width: calc(100vw - var(--paddingPage) * 2);
  margin-left: var(--paddingPage);
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: var(--xl-sizing);
  justify-content: center;
  align-items: center;
  background-color: var(--whiteColor);
  img {
    position: absolute;
    aspect-ratio: 2/3;
    width: 200px;
    object-fit: cover;
    &:nth-of-type(1) {
      top: var(--paddingPage);
      left: var(--paddingPage);
      aspect-ratio: 1/1;
      width: 200px;
    }
    &:nth-of-type(2) {
      top: 0;
      right: var(--paddingPage);
      aspect-ratio: 2/3;
      width: 200px;
    }
    &:nth-of-type(3) {
      left: 0;
      bottom: var(--paddingPage);
      aspect-ratio: 1/1;
      width: 60px;
    }
    &:nth-of-type(4) {
      bottom: 0;
      left: calc(var(--paddingPage) * 2);
      aspect-ratio: 3/2;
      width: 380px;
    }
    &:nth-of-type(5) {
      right: 0;
      bottom: var(--paddingPage);
      aspect-ratio: 3/2;
      width: 200px;
    }
  }
`;

function CanvaImg({ headline, title, gif1, gif2, gif3, gif4, gif5 }) {
  return (
    <StyledCanvaImg>
      <span className="headline">{headline}</span>
      <h2>{title}</h2>
      <img src={gif1} alt="gif" />
      <img src={gif2} alt="gif" />
      <img src={gif3} alt="gif" />
      <img src={gif4} alt="gif" />
      <img src={gif5} alt="gif" />
    </StyledCanvaImg>
  );
}

export default CanvaImg;
