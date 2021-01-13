import React, { useState } from "react";
import { FaTruckMonster } from "react-icons/fa";
import { Link } from "react-router-dom";
import css from "./style.module.css";
export const Dropdown = (props) => {
  const [show, setShow] = useState(false);
  const toggleBtn = () => setShow(!show);
  return (
    <div className={css.drp}>
      <button onClick={toggleBtn}>{props.item.title}</button>
      {show && (
        <div className={css.drpContent}>
          {props.item.subNav.map((el) => (
            <Link to={el.path}>
              <span className={css.drpTitle} onClick={toggleBtn}>
                {el.title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
