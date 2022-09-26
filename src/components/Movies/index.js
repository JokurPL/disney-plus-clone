import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Index() {
  const sliderRef = useRef(null);
  const rightScroll = () => {
    sliderRef.current.scroll({
      left: sliderRef.current.scrollLeft + 1000,
      behavior: "smooth",
    });
  };

  const leftScroll = () => {
    sliderRef.current.scroll({
      left: sliderRef.current.scrollLeft - 1000,
      behavior: "smooth",
    });
  };

  return (
    <div className="wrap-container">
      <h3 onClick={rightScroll}>Recommended for You</h3>
      <div ref={sliderRef} id="slider" className="wrap-content">
        <div className="wrap">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3D51E080506433A3E00EB91AFB42A1CE170BC66605BD1CEC9715554C858796E8/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </div>
        <div className="wrap">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E150C43392EB4A2C6AE3DB1618EAFD6FEAC649EE64FA87857825C8A3BF893B88/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </div>
        <div className="wrap">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0B72878CEF44F41824BA20D83A4635C5A65336BD8D193C44228F8DB1A7CADF96/badging?width=800&aspectRatio=1.78&format=jpeg" />
        </div>
        <div className="wrap">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4DD31E9E90135374386A74479E57D5E1DA3314553EAF371CF1C37111E015D274/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </div>
        <div className="wrap">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/68B49376921B9AD3F5FD846926575B3DF6619557BCC5144D0841ACF3CD7CDD18/badging?width=400&aspectRatio=1.78&format=jpeg&label=staroriginal" />
        </div>
        <div className="wrap">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FB5D085E8935309BDCA8AB6B04346E2CBB2DA8444A6F6C711389F7359F811D1F/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </div>
        <div className="wrap">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/33A85234169AD2AD90989DDE52EE600848B3B6A61A9B6F256A6CDC0E15510500/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </div>
        <div className="wrap">
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/805E873C792FBF9F511B68D62820E00FEE7AD98A793A3A5F81A3584596C5E71E/scale?width=400&aspectRatio=1.78&format=jpeg" />
        </div>
        <div className="wrap-controls">
          <div onClick={rightScroll} className="right-controls">
            <AiOutlineArrowRight />
          </div>
          <div onClick={leftScroll} className="left-controls ">
            <AiOutlineArrowLeft />
          </div>
        </div>
      </div>
    </div>
  );
}

/*const Container = styled.div`'
  margin: 0 30px;
  position: relative;
  &::-webkit-scrollbar { width: 0 !important }

`;

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 21%;
  padding: 0 1rem 1rem;

  overflow-x: auto;
  overscroll-behavior-inline: contain;

  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 1rem;

  & > * {
    scroll-snap-align: start;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrap = styled.div`
  display: grid;
  grid-template-rows: min-content;
  gap: 2rem;
  margin: 0 10px;
  color: blue;

  img {
    inline-size: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
`;*/

export default Index;
