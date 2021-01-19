import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import { connect } from "react-redux";
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 12px;
  right: 20px;
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "white")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = (props) => {
  const [open, setOpen] = useState(false);
  //console.log(open); () => setOpen(!open)
  //const [toggle, setToggle] = useState(false);
  const fff = () => {
    setOpen(!open);
  };
 
  //console.log(open); () => setOpen(!open)
  //const [toggle, setToggle] = useState(false);
 
  return (
    <>
     
      <StyledBurger open={open} onClick={fff}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} hideShow={fff} />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
    role: state.signupReducer.role,
  };
};

export default connect(mapStateToProps)(Burger);
