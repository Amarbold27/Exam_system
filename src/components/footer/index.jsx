import React from "react";
import "./footer.css";
import { IoIosCall, MdEmail, FaFacebookF } from "react-icons/all";
import Logo from "../../svgfiles/Anonymous-Time-icon.svg";
import { IoLogoAndroid } from "react-icons/io5";
const footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="ftrQuote">
          <div className="company">
            <img height={40} src={Logo} alt="logo" />
            <span className="erinuy">ЭРИН ҮЕ</span>
          </div>
          <p>Үнэлэгдэж шагнагдахаас үгүйлэгдэж дурсагдах нь илүү үнэ цэнтэй.</p>
          <span>
            <h4>Н. Тогоохүү /Монгол улсын зөвлөх/</h4>
          </span>
        </div>
        <div className="footer-div">
          <span className="contactUs">Холбоо барих</span>
          <ul>
            <li>
              <IoIosCall /> 88800888
            </li>
            <li>
              <MdEmail /> erin-uy@gmail.com
            </li>
            <li>
              <FaFacebookF />
              <a
                href="https://www.facebook.com/togookhuu.nyamjav"
                className="footer-a"
              >
                www.facebook.com/erin-uy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">Copyright.</div>
    </>
  );
};
export default footer;
