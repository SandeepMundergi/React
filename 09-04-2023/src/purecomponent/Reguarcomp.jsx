import React, { Component } from "react";

export default class Reguarcomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sandeep",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "1305" });
    }, 3000);
  }
  render() {
    console.log("regular is rendering");
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
