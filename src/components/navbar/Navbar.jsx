import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { GrDocumentTime } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
// import css from "./";
//border-bottom: 2px solid #f1f1f1;  background: #3367d6;
const Nav = styled.nav`
  width: 100%;
  min-width: 320px;
  height: 70px;
  -moz-transition: height 1s ease;
  -webkit-transition: height 1s ease;
  -o-transition: height 1s ease;
  transition: height 1s ease;
  z-index: 1;
  background: rgb(255, 171, 0);
  background: linear-gradient(
    72deg,
    rgba(255, 171, 0, 1) 0%,
    rgba(255, 141, 0, 1) 52%,
    rgba(255, 115, 0, 1) 100%
  );
  color: #f1f1f1;
  font-size: 16px;
  position: sticky;
  top: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    font-family: Tahoma, Verdana, Sans-serif;
    margin-left: 10px;
  }
  .webtitle {
    margin-left: 5px;
  }
  @media only screen and (max-width: 1100px) {
    position: fixed;
    flex: 1;
    right: 0;
    height: 52px;
    -moz-transition: height 1s ease;
    -webkit-transition: height 1s ease;
    -o-transition: height 1s ease;
    transition: height 1s ease;
  }
`;

const Navbar = () => {
  console.log(window.screen.width);
  return (
    <IconContext.Provider value={{ color: "white" }}>
      <Nav>
        <div className="logo">
          <GrDocumentTime style={{ fill: "white" }} />
          <span className="webtitle">Эрин үе</span>
        </div>
        <Burger />
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
