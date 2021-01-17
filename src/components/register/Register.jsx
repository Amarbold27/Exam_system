import React,{ useState }from "react";
import './style.css';
function Register() {
        return (
            <form className="register" >
                <h3>Бүртгүүлэх</h3>

                <div className="form-group"  >
                    <input type="text" className="form-control"  required  />
                    <label  className="anime-label">Нэр</label>
                </div>
                <div className="form-group"  >
                    <input type="text" className="form-control"  required  />
                    <label  className="anime-label">Сургууль</label>
                </div>
                <div className="form-group"  >
                    <input type="text" className="form-control"  required  />
                    <label  className="anime-label">Бүлэг</label>
                </div>
                <div className="form-group"  >
                    <input type="text" className="form-control"  required  />
                    <label  className="anime-label">Анги</label>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" required />
                    <label className="anime-label">Нууц үг</label>
                </div>

                <button type="submit" className="btn-reg"><span>Бүртгүүлэх</span></button>
                <p className="forgot-password text-right">
                    Нэвтрэх бол <a href="/log-in">log in?</a>
                </p>
            </form>
        );
 }
 export default Register;