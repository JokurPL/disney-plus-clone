import React from "react";
import styled from "styled-components";

function index() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="disney wrap" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="pixar wrap" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="marvel wrap" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="star wars wrap" />
      </Wrap>
      <Wrap>
        <img
          src="/images/viewers-national.png"
          alt="national geographic wrap"
        />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: 0px 25px 48px -5px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: all ease-in-out 0.25s;

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default index;
