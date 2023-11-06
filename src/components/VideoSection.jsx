import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledVideoSection = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-left: var(--paddingPage);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--l-sizing);
  video {
    z-index: -1;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(40%);
  }
  p {
    width: 200px;
  }
  p,
  h2,
  a {
    color: var(--whiteColor);
  }
`;

function VideoSection({ video, title, button, text, linkTo }) {
  return (
    <StyledVideoSection>
      <video src={video} autoPlay muted loop />
      <h2>{title}</h2>
      <p>{text}</p>
      <Link className="button" to={linkTo}>
        {button}
      </Link>
    </StyledVideoSection>
  );
}

export default VideoSection;
