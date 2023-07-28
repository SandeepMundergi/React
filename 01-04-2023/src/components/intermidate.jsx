import React, { Component } from "react";
import Final from "./final";

export default class Intermidate extends Component {
  render() {
    return (
      <div>
        <Final data={this.props.data + " Intermidate =>"} />
      </div>
    );
  }
}
