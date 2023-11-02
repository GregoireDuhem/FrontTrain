import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  header {
    display: flex;
    justify-content: space-between;
  }
`;

function Header(props) {
  return (
    <StyledHeader>
      <header>
        <div className="scenario">
          <Link to="/"> Chichiro</Link>
          <Link to="/"> Chichiro</Link>
        </div>
        <div className="hour">09:00 PM</div>
      </header>
    </StyledHeader>
  );
}

export default Header;
