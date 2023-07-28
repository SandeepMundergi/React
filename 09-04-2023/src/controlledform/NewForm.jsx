import React, { useState } from "react";
// import style from "./form.module.css";
const NewForm = () => {
  const [email, setEmail] = useState("");
  const [languages, setLanguages] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [dob, setDob] = useState("");
  const [check, setCheck] = useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email,
      languages,
      gender,
      photo,
      address,
      price,
      dob,
      check,
    });
  };
  return (
    <section>
      <article>
        <h2>Register Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="mail">Email:</label>
            <input
              type="email"
              placeholder="enter your mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="">Languages:</label>
            <select
              name=""
              id=""
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
            >
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="js">JS</option>
              <option value="react">React</option>
              <option value="angular">Angular</option>
            </select>
          </div>
          <div
            className="formGroup"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <label htmlFor="gender">Gender:</label>
            <input type="radio" name="gender" value="male" />
            Male
            <input type="radio" name="gender" value="female" />
            Female
            <input type="radio" name="gender" value="others" />
            Others
          </div>
          <div className="formGroup">
            <label htmlFor="">Upload files</label>
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
          </div>
          <div className="formGroup">
            <label htmlFor="">Address</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
          <div className="formGroup">
            <label htmlFor="">Price:</label>
            <input
              type="range"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="">DOB:</label>
            <input
              type="datetime-local"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div
            className="formGroup"
            value={check}
            onChange={(e) => setCheck(e.target.value)}
          >
            <label htmlFor="">Lang:</label>
            <input type="checkbox" name="check" value="kannada" />
            Kannada
            <input type="checkbox" name="check" value="english" />
            English
            <input type="checkbox" name="check" value="telugu" />
            Telugu
          </div>
          <div className="btn">
            <button type="submit">submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default NewForm;
