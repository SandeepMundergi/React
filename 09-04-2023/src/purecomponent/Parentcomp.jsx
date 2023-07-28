import React, { Component } from "react";
import Purecomp from "./Purecomp";
import Reguarcomp from "./Reguarcomp";

export default class Parentcomp extends Component {
  render() {
    return (
      <div>
        <Purecomp />
        <Reguarcomp />
      </div>
    );
  }
}
