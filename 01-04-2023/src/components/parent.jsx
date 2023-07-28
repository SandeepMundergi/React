// import React, { useRef } from "react";
// import Child from "./child";
// function Parent() {
//   let fRef = useRef();
//   let handle = () => {
//     fRef.current.style.background = "red";
//     fRef.current.style.textTransform = "uppercase";
//   };
//   return (
//     <div>
//       <Child ref={fRef} />
//       <button onClick={handle}>change</button>
//     </div>
//   );
// }

// export default Parent;

// import React, { useRef } from "react";
// import Child from "./child";
// function Parent() {
//   let demoref = useRef();

//   return (
//     <div>
//       <Child ref={demoref} />
//       <button
//         onClick={() => {
//           demoref.current.play();
//         }}
//       >
//         Play
//       </button>
//       <button
//         onClick={() => {
//           demoref.current.pause();
//         }}
//       >
//         Pause
//       </button>
//     </div>
//   );
// }

// export default Parent;

// import React, { Component } from "react";
// // import Child from "./child";
// export default class Parent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "xyz",
//     };
//   }
//   handle = () => {
//     console.log("clicked");
//     this.setState = {
//       name: "Sandeep",
//     };
//   };
//   render() {
//     return (
//       <div>
//         {/* <Child /> */}
//         <h1>{this.state.name}</h1>
//         <button onClick={this.handle}>click</button>
//       </div>
//     );
//   }
// }

//? Event onmouseenter and leave

// import React, { useState } from "react";

// const Parent = () => {
//   const [count, setCount] = useState(0);
//   let handle = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onMouseEnter={handle}>touch</button>
//       <button onMouseLeave={handle}>touch</button>
//     </div>
//   );
// };

// export default Parent;

import React, { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  let handle = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <input type="text" onKeyUp={handle} />
    </div>
  );
};

export default Parent;
