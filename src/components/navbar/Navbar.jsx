import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
//border-bottom: 2px solid #f1f1f1;  background: #3367d6;
const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background: rgb(255, 171, 0);
  background: linear-gradient(
    72deg,
    rgba(255, 171, 0, 1) 0%,
    rgba(255, 141, 0, 1) 52%,
    rgba(255, 115, 0, 1) 100%
  );

  color: #f1f1f1;
  font-size: 16px;

  margin: 0;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  .logo {
  }
`;

const Navbar = () => {
  return (
    <Nav>
      {<div className="logo">Nav Bar</div>}
      <Burger />
    </Nav>
  );
};

export default Navbar;
