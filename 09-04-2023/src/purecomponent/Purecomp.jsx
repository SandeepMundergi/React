import React, { PureComponent } from "react";

export default class Purecomp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "sandeep",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "sandeep" });
    }, 3000);
  }
  render() {
    console.log("pure component loading...");
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
