import React from "react";
import css from "./style.module.css";
import { AiOutlineCheckCircle } from "react-icons/all";
const Card = (props) => {
  return (
    <div className={css.cardContainer}>
      <span className={css.titleName}><h3>Сурагч</h3></span>
      <ul>
        <li>Coffee Coffee Coffee Coffee</li>
        <li>Tea Coffee Coffee</li>
        <li>Coca Cola Coca Cola Coca Cola Coca Cola</li>
        <li>Coffee Coca ColaCoca Cola Coca Cola</li>
        <li>Tea Coca ColaCoca ColaCoca Cola</li>
      </ul>
    </div>
  );
};
export default Card;
