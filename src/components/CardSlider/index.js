/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Index({ data }) {
  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(0);
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
      <div
        ref={sliderRef}
        id="slider"
        onScroll={(e) => {
          setSliderPosition(e.target.scrollLeft);
        }}
        className="wrap-content"
      >
        {data &&
          data.map((obj, index) => {
            return (
              <div className="wrap" key={`card-slider-${obj.id}`}>
                <img src={obj.url} alt={`slider card ${index}`} />
              </div>
            );
          })}
        <div className="wrap-controls">
          <div onClick={rightScroll} className="right-controls">
            {sliderRef &&
              sliderRef.current &&
              sliderPosition <
                sliderRef.current.scrollWidth -
                  sliderRef.current.clientWidth -
                  50 && <AiOutlineArrowRight />}
          </div>
          <div onClick={leftScroll} className="left-controls ">
            {sliderPosition > 10 && <AiOutlineArrowLeft />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
