import React, { Fragment, useContext } from "react";
import { GlobalProvider } from "./GlobalContextApi";

const CompB = () => {
  let value = useContext(GlobalProvider);
  console.log(value);
  return (
    <div>
      {value &&
        value.photos.map((x) => {
          return (
            <Fragment>
              <div style={{ border: "1px solid black" }}>
                <img src={x.img_src} alt="" width={100} />
                <p>{x.earth_date}</p>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
};

export default CompB;
