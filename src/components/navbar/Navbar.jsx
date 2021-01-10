import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
//border-bottom: 2px solid #f1f1f1;
const Nav = styled.nav`
  width: 100%;
  height: 52px;
  background-color: #0d2538;
  color: #f1f1f1;
  font-size: 18px;
  position: sticky;
  top: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  .logo {
    padding-top: 15px;
    padding-left: 15px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Nav Bar</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
