import React, { Fragment } from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import Footer from "../footer/index";
import img from "../image/test.jpg";
import Benefit from "./benefit";
const Home = (props) => {
  return (
    <div className="home-container">
      <div className={css.content}>
        <div className={css.contentText}>
          <h1>Цахим шалгалтын систем</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className={css.btns}>
            <Link to="log-in" className={css.linkLogin}>
              <span className={css.title}>Нэвтрэх</span>
            </Link>
            <Link to="/signup" className={css.linkSignup}>
              <span className={css.title}>Бүртгүүлэх</span>
            </Link>
          </div>
        </div>
        {/* width="420" height="450" */}
        <img src={img} alt="test system" className={css.imgTestSystem} />
        {/* <a href="https://www.freepik.com/vectors/background">
          Background vector created by freepik - www.freepik.com
        </a> */}
      </div>
      <Benefit />
      <Footer />
    </div>
  );
};
export default Home;
