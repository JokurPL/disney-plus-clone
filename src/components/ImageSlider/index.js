import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BtnSlider from "./BtnSlider";

// Data structure
// [
//   {
//     id: 1,
//     title: "Lorem ipsum",
//     subTitle: "Lorem",
//     img: "image.jpg",
//   },
// ];
//

function ImageSlider({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);

  let slideInterval;

  const nextSlide = (dataLength) => {
    if (slideIndex >= dataLength - 1) {
      setSlideIndex(0);
      return;
    }

    setSlideIndex(slideIndex + 1);
  };

  const prevSlide = (dataLength) => {
    if (slideIndex <= 0) {
      setSlideIndex(dataLength - 1);
      return;
    }

    setSlideIndex(slideIndex - 1);
  };

  const auto = () => {
    slideInterval = setInterval(() => nextSlide(data.length), 5000);
  };

  useEffect(() => {
    setSlideIndex(0);
  }, []);

  useEffect(() => {
    auto();

    return () => clearInterval(slideInterval);
  }, [slideIndex]);

  return (
    <Container>
      <BtnSlider moveSlide={() => nextSlide(data.length)} direction={"next"} />
      <BtnSlider
        moveSlide={() => prevSlide(data.length)}
        direction={"previous"}
      />

      {data.map((obj, index) => {
        return (
          <Slide
            className={slideIndex === index ? "active-anim" : null}
            key={`slider-image-${index}`}
          >
            <img src={`images/${obj.img}`} alt={obj.title} />
            <Title>{obj.title}</Title>
          </Slide>
        );
      })}
      <ContainerDots>
        {Array.from({ length: data.length }).map((item, index) => {
          return (
            <Dot
              key={`dot-${index}`}
              className={slideIndex === index ? "dot-active" : null}
            />
          );
        })}
      </ContainerDots>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 368px;
  margin: 20px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const ContainerDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  // transform: translateX(100vw);
  transistion: all ease-in-out 1s;

  img {
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid rgba(250, 250, 250, 0.5);
  background: rgba(250, 250, 250, 0.2);
  margin: 0 5px;
`;

const Title = styled.h1`
  position: absolute;
  bottom: 50px;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  text-shadow: 2px 2px black;
  text-transform: uppercase;
`;

export default ImageSlider;
