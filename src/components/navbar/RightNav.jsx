import React from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Dropdown } from "./dropdown";
import { SidebarData } from "./SideBarData";
import "./rightnav.css";
import { IconContext } from "react-icons/lib";
import {
  IoLogInOutline,
  IoLogOutOutline,
  AiOutlineFileAdd,
  FiUser,
} from "react-icons/all";
import { connect } from "react-redux";
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

  @media (max-width: 1100px) {
    margin-top: 0;
    flex-flow: column nowrap;
    background-color: #f2f6f7;
    color: #20547d;
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ open }) => (open ? "block" : "none")};
    height: 100%;
    width: 250px;
    padding-top: 3.5rem;
    transition: margin-right 2s ease-in-out 1s;
    li {
      color: #20547d;
      &:nth-child(1) {
        margin-bottom: 0;
      }
      &:nth-child(2) {
        margin-top: 0;
        position: absolute;
        z-index: 1;
      }
      &:nth-child(3) {
        margin-top: 40px;
        margin-bottom: 0;
        z-index: 1;
      }
      &:nth-child(4) {
        margin-top: 0;
        z-index: 1;
      }
      &:nth-child(5) {
        margin-top: 0;
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
  if (window.innerWidth > 1100) {
    if (props.open === true) props.hideShow();
  }
  let href = window.location.pathname;
  let hrefLenght = href.length;
  console.log("pathname_______", href);
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
                props.userId && (
                  <Dropdown
                    key={el.title}
                    className="drp"
                    item={el}
                    hide={props.hideShow}
                    open={props.open}
                  />
                )
              )}
            </li>
          );
        })}

        <li>
          {props.userId &&
          (props.role === "admin" || props.role === "teacher") ? (
            <Link to="/add-exam" className="link" onClick={props.hideShow}>
              <AiOutlineFileAdd />
              <span className="title">СОРИЛ НЭМЭХ</span>
            </Link>
          ) : (
            hrefLenght < 15 && href !== "/reset" && <Redirect to="/" />
          )}
        </li>
        <li>
          {props.userId && props.role === "admin" ? (
            <Link to="payment" className="link" onClick={props.hideShow}>
              <AiOutlineFileAdd />
              <span className="title">ЭРХ СУНГАХ</span>
            </Link>
          ) : (
            hrefLenght < 15 && href !== "/reset" && <Redirect to="/" />
          )}
        </li>
        <li>
          {props.userId && (
            <Link  className="link" onClick={props.hideShow}>
              <FiUser />
              <span className="title">
                {props.lastname.substr(0, 1) + ". " + props.firstname}
              </span>
            </Link>
          )}
        </li>
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
    role: state.signupReducer.role,
    firstname: state.signupReducer.firstname,
    lastname: state.signupReducer.lastname,
  };
};

export default connect(mapStateToProps)(RightNav);
