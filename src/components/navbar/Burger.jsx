import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import { connect } from "react-redux";
let windowHeight= window.screen.height;
const BlurDiv = styled.div`
@media (max-width: 1100px){
position:absolute;
top:52px;
left:250px;
right:0;
display:flex;
flex:1;
height:${windowHeight}px;
background-color:black;
opacity:0.5;
}
`;
const StyledBurger = styled.div`
  width: 25px;
  height: 2em;
  position: fixed;
  top: 12px;
  display: none;
  right:20px;
  @media (max-width: 1100px) {
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
  const fff = () => {
    setOpen(!open);
  };

  return (
    <>
     
      <StyledBurger open={open} onClick={fff}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <BlurDiv style={{display:open?"block":"none"}}/>
      <RightNav open={open} hideShow={fff}  />
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