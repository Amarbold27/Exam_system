import React from "react";
import "./footer.css";
import { IoIosCall, MdEmail, FaFacebookF } from "react-icons/all";
const footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-div">
          <span>ABOUT US</span>
          <ul>
            <li>ыбйб</li>
            <li>ыбйб</li>
            <li>ыбйб</li>
            <li>ыбйб</li>
          </ul>
        </div>
        <div className="footer-div">
          <span>Холбоо барих</span>
          <ul>
            <li>
              <IoIosCall /> 88800888
            </li>
            <li>
              <MdEmail /> erin-uy@gmail.com
            </li>
            <li>
              <FaFacebookF />
              <a href="https://www.facebook.com/togookhuu.nyamjav">
                www.facebook.com/erin-uy
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default footer;
