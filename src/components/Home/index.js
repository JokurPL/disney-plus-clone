import React from "react";
import styled from "styled-components";
import ImageSlider from "../ImageSlider";
import data from "./data";
import Viewers from "../Viewers";
import Movies from "../Movies";

function Home() {
  return (
    <Container>
      <ImageSlider data={data} />
      <Viewers />
      <Movies />
    </Container>
  );
}

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 2rem;
  position: relative;
`;

export default Home;
