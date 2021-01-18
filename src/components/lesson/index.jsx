import React from "react";
import css from "./style.module.css";

export const Lesson = (props) => {
  //className={css.container}
  return <div className={css.container}>{props.ner}</div>;
};
