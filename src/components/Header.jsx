import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrowRight from "../assets/icons/arrowRight.svg";

const StyledHeader = styled.div`
  header {
    z-index: 2;
    position: fixed;
    top: var(--xl-sizing);
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding: 0 var(--paddingPage);
    .scenario {
      display: flex;
      flex-direction: column;
      gap: var(--s-sizing);
    }
    span,
    a {
      color: var(--whiteColor);
    }
    span.hour {
      align-self: flex-start;
      padding: 10px 16px;
      border: solid 1px var(--boderColor);
      border-radius: 4px;
      background-color: var(--blurBg);
      backdrop-filter: blur(20px);
    }
    a {
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
`;

function Header() {
  return (
    <StyledHeader>
      <header>
        <div className="scenario">
          <Link className="active" to="/">
            Chihiro
          </Link>
          <Link to="/"> Chihiro</Link>
          <Link to="/"> Chihiro</Link>
        </div>
        <span className="hour">09:00 PM</span>
      </header>
    </StyledHeader>
  );
}

export default Header;
