import React from "react";
import  "./style.css";
import NewsList from "../news/news-list";
import Footer from "../footer/index";
const Home = (props) => {
  return (
    <div className="home-container">
      <NewsList />
      <Footer/>
    </div>
    
  );
};
export default Home;
