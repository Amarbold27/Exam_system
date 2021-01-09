import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background-color:#0D2538;
  color:#f1f1f1;
  font-size:18px;
  border-bottom: 2px solid #f1f1f1;
  margin:0;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Nav Bar
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar