import React, { useState } from "react";

const ControledForm = () => {
  const [state, setstate] = useState({
    email: "",
    password: "",
    phoneno: "",
  });
  let { email, password, phoneno } = state;
  let handel = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  let handelsubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, phoneno });
  };
  return (
    <div>
      <form onSubmit={handelsubmit}>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="mail"
            id="email"
            name="email"
            value={state.email}
            onChange={handel}
          />
        </div>
        <div>
          <label htmlFor="pwd">Password : </label>
          <input
            type="password"
            id="pwd"
            name="password"
            value={state.password}
            onChange={handel}
          />
        </div>
        <div>
          <label htmlFor="phno">Phone no : </label>
          <input
            type="tel"
            id="phno"
            value={state.phoneno}
            name="phoneno"
            onChange={handel}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default ControledForm;
