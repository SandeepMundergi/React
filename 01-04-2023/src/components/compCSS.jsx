// import React, { Component } from "react";
// import style from "../CSS/style/com.module.css";
// export default class ComCSS extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className={style.ch1}>hello world</h1>
//       </div>
//     );
//   }
// }

//? using javascript obj

import React from "react";

const compCSS = () => {
  const style = {
    h1: {
      color: "red",
    },
    p: {
      fontSize: "30px",
    },
  };
  return (
    <div>
      <h1 style={style.h1}>hello</h1>
      <p style={style.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, corporis
        recusandae. Rerum fugit vel ad, earum maiores magni quis nostrum
        perferendis inventore quas voluptatem vitae quos aspernatur at, nesciunt
        laborum fugiat hic sequi ducimus! Distinctio?
      </p>
    </div>
  );
};

export default compCSS;
