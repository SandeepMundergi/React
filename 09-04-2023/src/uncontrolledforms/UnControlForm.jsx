import React, { Component, createRef } from "react";

export default class UnControlForm extends Component {
  constructor(props) {
    super(props);
    this.fnameRef = createRef();
    this.lnameRef = createRef();
    this.mailRef = createRef();
    this.passwordRef = createRef();
    this.desRef = createRef();
  }
  handle = (e) => {
    e.preventDefault();
    let fnam = this.fnameRef.current.value;
    let lnam = this.lnameRef.current.value;
    let email = this.mailRef.current.value;
    let pwd = this.passwordRef.current.value;
    let des = this.desRef.current.value;
    console.log({ fnam, lnam, email, pwd, des });
    localStorage.setItem(
      "user",
      JSON.stringify({ fnam, lnam, email, pwd, des })
    );

    console.log(localStorage.getItem("user"));
  };
  render() {
    return (
      <form>
        <div className="fromgroup">
          <label htmlFor="Fname">First Name : </label>
          <input type="text" id="Fname" ref={this.fnameRef} />
        </div>
        <div className="fromgroup">
          <label htmlFor="Lname">Last Name : </label>
          <input type="text" id="Lname" ref={this.lnameRef} />
        </div>
        <div className="fromgroup">
          <label htmlFor="mail">Email ID : </label>
          <input type="email" id="mail" ref={this.mailRef} />
        </div>
        <div className="fromgroup">
          <label htmlFor="pwd">Password : </label>
          <input type="password" id="pwd" ref={this.passwordRef} />
        </div>

        <div className="formgroup">
          <label htmlFor="des">Designation : </label>
          <select name="designation" id="des" ref={this.desRef}>
            <option value="Manager">Manager</option>
            <option value="asstManager">Asst.Manager</option>
            <option value="lead">Group Lead</option>
            <option value="members">Members</option>
          </select>
        </div>

        <div className="fromgroup">
          <input type="submit" value="Submit" onClick={this.handle} />
        </div>
      </form>
    );
  }
}
