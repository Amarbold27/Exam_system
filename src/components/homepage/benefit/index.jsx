import React from "react";
import css from "./style.module.css";
import Card from "../benefitCard";

const Benefit = () => {
  return (
    <div className={css.container}>
      <span className={css.bTitle}>
        <h1>Давуу талууд</h1>
      </span>
      <div className={css.cards}>
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Benefit;
