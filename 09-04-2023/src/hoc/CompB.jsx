import React, { Fragment } from "react";
import CompC from "./CompC";
import HOCGlobal from "./HOCGlobal";

const CompB = (props) => {
  let item = props.value[0];
  return (
    <div>
      <CompC />
      {item &&
        item.map((x) => {
          return (
            <Fragment key={x.id}>
              <li>{x.title}</li>
            </Fragment>
          );
        })}
    </div>
  );
};

export default HOCGlobal(CompB);
