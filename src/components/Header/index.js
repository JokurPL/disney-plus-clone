import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="./images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home icon" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="search icon" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist icon" />
          <span>Watchlist</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="original icon" />
          <span>Originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="movie icon" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="series icon" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  text-transform: uppercase;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    content-justify: center;
    padding: 0px 12px;
    cursor: pointer;
    // flex: 1;

    span {
      font-size: 13px;
      letterspacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        opacity: 0;
        width: 0;
        transition: all 0.4s ease-in-out;
      }

      &:hover {
        :after {
          opacity: 1;
          width: 100%;
        }
      }
    }

    img {
      height: 20px;
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
