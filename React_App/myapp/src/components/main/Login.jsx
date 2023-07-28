import React from "react";
import Style from "./Main.module.css";
const Login = () => {
  return (
    <div className={Style.form}>
      <div className={Style.formblock}>
        <div className={Style.formcontent}>
          <center>
            <h1>Login</h1>
          </center>
          <form action="/">
            <div className={Style.formgroup}>
              <label htmlFor="name">Username : </label>
              <input type="text" id="name" />
            </div>
            <div className={Style.formgroup}>
              <label htmlFor="mail">Email : </label>
              <input type="email" id="mail" />
            </div>
            <div className={Style.formgroup}>
              <label htmlFor="pwd">Password : </label>
              <input type="password" id="pwd" />
            </div>
            <center>
              <button type="submit">Submit</button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
