// import React, { forwardRef } from "react";

// const Child = forwardRef((props, ref) => {
//   return (
//     <div>
//       <h1 ref={ref}>changed</h1>
//     </div>
//   );
// });

// export default Child;

//?

// import React, { forwardRef } from "react";
// import Video from "../video/master.mp4";
// const Child = forwardRef((props, ref) => {
//   return (
//     <div>
//       <video src={Video} ref={ref} width={300}></video>
//     </div>
//   );
// });

// export default Child;

import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return <div>Child</div>;
  }
}
