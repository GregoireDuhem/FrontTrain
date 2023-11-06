import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StoryTelling from "./components/StoryTelling";
import VideoSection from "./components/VideoSection";
import CanvaImg from "./components/CanvaImg";
import Footer from "./components/Footer";

// Assets
import background from "./assets/img/chihirobg.jpeg";
import visual1 from "./assets/img/visual1.jpeg";
import water from "./assets/videos/water.mp4";
import gif1 from "./assets/videos/gif1.gif";
import gif2 from "./assets/videos/gif2.gif";
import gif3 from "./assets/videos/gif3.gif";
import gif4 from "./assets/videos/gif4.gif";
import gif5 from "./assets/videos/gif5.gif";

const StyledHome = styled.div``;

function Home() {
  return (
    <StyledHome>
      <Header />
      <Hero bg={background} headline="Welcome to" title="Spirited Away" />
      <StoryTelling
        headline="welcome to "
        title="Spirited"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum et culpa, perferendis quis optio voluptatem beatae, perspiciatis quo eaque dolorum ab ullam sequi, ipsa illo voluptate harum quaerat eum ea"
        img={visual1}
      />
      <VideoSection
        video={water}
        title="title"
        button="button"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum et culpa, perferendis quis optio voluptatem beatae, perspiciatis quo eaque dolorum ab ullam sequi, ipsa illo voluptate harum quaerat eum ea"
        linkTo="/"
      />
      <CanvaImg
        headline="Test"
        title="Title oui oui"
        gif1={gif1}
        gif2={gif2}
        gif3={gif3}
        gif4={gif4}
        gif5={gif5}
      />
      <Footer background={background} img={visual1} />
    </StyledHome>
  );
}

export default Home;
