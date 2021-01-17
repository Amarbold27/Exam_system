import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./style.module.css";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

export const Dropdown = (props) => {
  const [show, setShow] = useState(false);
  const toggleBtn = () => {
    setShow(!show);
  };
  return (
    <div className={css.drp}>
      <Link to={props.item.path} className={css.drpBtn} onClick={toggleBtn}>
        {props.item.icon}
        <span className="title">{props.item.title}</span>
        {show ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
      </Link>
      {show && (
        <div className={css.drpContent}>
          {props.item.subNav.map((el, index) => (
            <Link
              to={el.path}
              key={index}
              className={css.drpTitle}
              onClick={props.hide}
            >
              {el.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
