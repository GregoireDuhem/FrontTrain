import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrowRight from "../assets/icons/arrowRight.svg";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 55vh;
  gap: var(--l-sizing);
  span.headline {
    color: var(--whiteColor);
  }
  img.background {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;
  }
  div.card {
    width: 460px;
    height: 200px;
    padding: var(--s-sizing);
    background-color: #ffffff6e;
    backdrop-filter: blur(24px);
    border-radius: 10px;
    border: solid 0.5px white;
    display: flex;
    gap: var(--m-sizing);
    img {
      width: 60%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
    }
    div.scenario {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--s-sizing);
      flex-direction: column;
      a {
        color: var(--whiteColor);
        display: flex;
        align-items: center;
        gap: var(--xs-sizing);
        &::before {
          display: inline-block;
          content: url(${arrowRight});
          margin-bottom: -2px;
          opacity: 0;
          transition: opacity 0.6s;
        }
        &.active,
        &:hover {
          &::before {
            opacity: 1;
          }
        }
      }
    }
  }
`;

function Footer({ background, img }) {
  return (
    <StyledFooter>
      <span className="headline">choose your ghibli</span>
      <img className="background" src={background} alt="bg" />
      <div className="card">
        <img src={img} alt="img" />
        <div className="scenario">
          <Link to="/">Chihiro</Link>
          <Link to="/">Chihiro</Link>
          <Link to="/">Chihiro</Link>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
