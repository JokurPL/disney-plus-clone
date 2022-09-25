import React from "react";
import styled from "styled-components";

function BtnSlider({ direction, moveSlide }) {
  if (direction === "next") {
    return (
      <SlideButton className="next" onClick={moveSlide}>
        <img src="images/right_arrow.svg" />
      </SlideButton>
    );
  } else {
    return (
      <SlideButton className="prev" onClick={moveSlide}>
        <img src="images/left_arrow.svg" />
      </SlideButton>
    );
  }
}

const SlideButton = styled.button`
  width: 60px;
  height: 60px;
  background: rgba(250, 250, 250, 0.7);
  border-radius: 50%;
  border: none;
  position: absolute;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    // width: 25px;
    // height: 25px;
    pointer-events: none;
  }
`;

export default BtnSlider;
