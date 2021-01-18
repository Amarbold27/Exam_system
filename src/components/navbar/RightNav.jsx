import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Dropdown } from "./dropdown";
import { SidebarData } from "./SideBarData";
import "./rightnav.css";
import { IconContext } from "react-icons/lib";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/all";
import { connect } from "react-redux";
//#0d2538
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0px;
  height: 100%;
  li {
    text-align: center;
    margin-top: 18px;
    margin-right: 20px;
  }

  @media (max-width: 500px) {
    
    margin-top: 0;
    flex-flow: column nowrap;
    background-color: #f2f6f7;
    color: #20547d;
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ open }) => (open ? "block" : "none")};
    height: 100%;
    width: 70vw;
    padding-top: 3.5rem;
    transition: margin-right 2s ease-in-out 1s;
    li {
      color: #20547d;
      &:nth-child(1) {
        position: absolute;
        top: 10%;
      }
      &:nth-child(2) {
        position: absolute;
        top: 15%;
        z-index: 1;
      }
      &:last-child {
        position: absolute;
        bottom: 20%;
      }
    }
  }
`;

const RightNav = (props) => {
  //console.log(open);

  return (
    <IconContext.Provider value={{ className: "icons" }}>
      <Ul open={props.open}>
        {SidebarData.map((el) => {
          return (
            <li>
              {!el.subNav ? (
                <Link
                  to={el.path}
                  key={el.title}
                  className="link"
                  onClick={props.hideShow}
                >
                  {el.icon}
                  <span className="title">{el.title}</span>
                </Link>
              ) : (
                <Dropdown
                  key={el.title}
                  className="drp"
                  item={el}
                  hide={props.hideShow}
                />
              )}
            </li>
          );
        })}
        <li>
          {props.userId ? (
            <Link to="log-out" className="link" onClick={props.hideShow}>
              <IoLogOutOutline />
              <span className="title">ГАРАХ</span>
            </Link>
          ) : (
            <Link to="log-in" className="link" onClick={props.hideShow}>
              <IoLogInOutline />
              <span className="title">НЭВТРЭХ</span>
            </Link>
          )}
        </li>
      </Ul>
    </IconContext.Provider>
  );
};
const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};

export default connect(mapStateToProps)(RightNav);
