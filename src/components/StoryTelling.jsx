import React from "react";
import styled from "styled-components";

const StyledStoryTelling = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: var(--xl-sizing) var(--paddingPage) var(--paddingPage)
    var(--paddingPage);
  background-color: var(--whiteColor);
  height: auto;
  border-radius: 40px 40px 0 0;
  margin-top: -80px;
  img {
    width: 100%;
    height: auto;
    border-radius: 40px;
    margin-top: var(--2xl-sizing);
  }
`;

function StoryTelling({ headline, title, text, img }) {
  return (
    <StyledStoryTelling>
      <span className="heading">{headline}</span>
      <div className="spacer" />
      <div className="duo_content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <img src={img} alt="img" />
      <div className="spacer" />
    </StyledStoryTelling>
  );
}

export default StoryTelling;
