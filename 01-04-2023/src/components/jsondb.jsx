import React, { Component } from "react";

export default class Jsondb extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <table border={"2px"}>
          <tr>
            <th>emp_id</th>
            <th>emp_name</th>
            <th>emp_branch</th>
          </tr>
          {this.props.data.employee.map((x) => {
            return (
              <tr>
                <>
                  <td>{x.emp_name}</td>
                  <td>{x.emp_id}</td>
                  <td>{x.branch}</td>
                </>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
