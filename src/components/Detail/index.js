import React from "react";
import styled from "styled-components";

function Index() {
  const imgBackground =
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg";

  const imgTitle =
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78";

  return (
    <Container>
      <Background>
        <img src={imgBackground} alt="background" />
      </Background>
      <ImageTitle>
        <img src={imgTitle} alt="title" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="play content" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="play trailer" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="group watch" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 • 7m • Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        The film is about an aging and lonely Chinese Canadian mother suffering
        from empty nest syndrome, who receives an unexpected second chance at
        motherhood when she makes a steamed bun (baozi) that comes to life. The
        film won the Academy Award for Best Animated Short Film at the 91st
        Academy Awards.
      </Description>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  background: linear-gradient(
    0deg,
    rgba(24, 24, 24, 0.7990546560421043) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  padding-top: 46px;
  padding-bottom: 46px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  height: 56px;
  cursor: pointer;
  background: rgb(249, 249, 249);
  padding: 0 24px;
  margin-right: 22px;
  border: none;
  letter-spacing: 1.8px;
  transition: all ease-in-out 0.3s;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border: 1px solid rgba(249, 249, 249);

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const AddButton = styled.button`
  marign-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  margin-right: 16px;
  span {
    font-size: 32px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const GroupWatchButton = styled(AddButton)``;

const SubTitle = styled.div`
  margin: 20px 0;
`;

const Description = styled.p`
  color: rgba(250, 250, 250, 0.9);
  font-size: 20px;
  min-heigh: 20x;
`;

export default Index;
