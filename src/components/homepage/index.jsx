import React from "react";
<<<<<<< HEAD
//import css from "./style.module.css";
import NewsList from "../news/news-list";

const Home = (props) => {
  return (
    <div>
      Home page
      <NewsList />
    </div>
  );
};
export default Home;
=======
import  "./style.css";

import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu className="page-wrap">
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a>
    </Menu>
  );
};
>>>>>>> 21481371f8cb75515e0c65ac4a076596294cf281
