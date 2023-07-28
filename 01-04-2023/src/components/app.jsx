// ! function base component   {rafc,rafce}

// import React, { useState } from "react";
// import Navbar from "./navbar";
// // import Sidebar from "./sidebar";
// function App() {
//   const [name] = useState("sandy"); // passing value using usestate to function
//   const [age] = useState("21");
//   const [company] = useState("NA");
//   const [salary] = useState("10000");
//   return (
//     <div>
//       <Navbar name={name} age={age} company={company} salary={salary} />
//       {/* <Sidebar /> */}
//     </div>
//   );
// }

// export default App;

// // ! class base component {rcc}
// import React, { Component } from "react";
// import Navbar from "./navbar";

// export default class app extends Component {
//   obj1 = {
//     name: "sandy",
//     company: "NA",
//     salary: "not applicable",
//   };
//   obj2 = {
//     name2: "sandeep",
//     company2: "DXC",
//     salary2: "not applicable",
//   };
//   obj = { ...this.obj1, ...this.obj2 };
//   render() {
//     return (
//       <div>
//         {/* <Navbar {...this.obj1} {...this.obj2} /> */}
//         <Navbar user={this.obj} />
//       </div>
//     );
//   }
// }

// ! class base component {rcc}
// import React, { Component } from "react";
// import Navbar from "./navbar";

// export default class app extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar arr={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import Navbar from "./navbar";
// export default class App extends Component {
//   handle = () => {
//     console.log("clicked");
//   };
//   render() {
//     return (
//       <div>
//         <Navbar value={this.handle} />
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import Navbar from "./navbar";
// export default class app extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar name=" sandy " age company>
//           <h1>nav 1</h1>
//         </Navbar>

//         <Navbar age={21} name>
//           <h1>nav 2</h1>
//         </Navbar>

//         <Navbar company=" TCS " name age>
//           <h1>nav 3</h1>
//         </Navbar>
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import Navbar from "./navbar";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
// <Navbar username="Alok" age={22}>
//   <h1>hello i am prop children 1</h1>
// </Navbar>
// <Navbar username="anup" city="Bellary">
//   <h1>hello i am prop children 2</h1>
// </Navbar>
// <Navbar username="sampath" area="police">
//   <h1>hello i am prop children 3</h1>
// </Navbar>
// <Navbar username="pavan" pin={570001}>
//   <h1>hello i am prop children 4</h1>
// </Navbar>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react'
// import Navbar from './components/Navbar'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
// <Navbar frontend={["html","css","js","react","angualr"]} backend={["java","nodejs","expressjs","php","python"]}>
//   <h1>first navbar call</h1>
// </Navbar>
// <Navbar frontend={["html","css","js","react","angualr"]}>
//   <h1>second navbar call</h1>
// </Navbar>
//       </div>
//     )
//   }
// }

// import React, { Component } from "react";
// import Navbar from "./navbar";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar
//           username="abc"
//           age={25}
//           arr={[1, 2, 3, 4]}
//           obj={{ name: "Sandy" }}
//         />
//       </div>
//     );
//   }
// }

// ! homeWork 1

// import React, { useState } from "react";
// import Navbar from "./navbar";

// function App() {
//   const [obj1] = useState({ name: "sandy", company: "NA", salary: 120000 });
//   const [obj2] = useState({ state: "karnataka", city: "Ballari", pin: 583101 });
//   const obj = { ...obj1, ...obj2 };
//   return (
//     <div>
//       <Navbar data={obj} />
//     </div>
//   );
// }

// export default App;

// ! homework 2

// import React, { useState } from "react";
// import Navbar from "./navbar";
// function App() {
//   const [value] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   return (
//     <div>
//       <Navbar data={value} />
//     </div>
//   );
// }

// export default App;

// ! homework 3

// import React from "react";
// import Navbar from "./navbar";

// function App() {
//   const handle = () => {
//     console.log("clicked..");
//   };
//   return (
//     <div>
//       <Navbar data={handle} />
//     </div>
//   );
// }

// export default App;

// ! homework 4

// import React from "react";
// import Navbar from "./navbar";

// function App() {
//   return (
//     <div>
//       <Navbar name="Sandy " age={22}>
//         <h1>hello i am prop children 1</h1>
//       </Navbar>
//       <Navbar name="priyanka " company="DXC">
//         <h1>hello i am prop children 2</h1>
//       </Navbar>
//       <Navbar name="tushar " age={20}>
//         <h1>hello i am prop children 3</h1>
//       </Navbar>
//       <Navbar name="varun ">
//         <h1>hello i am prop children 4</h1>
//       </Navbar>
//     </div>
//   );
// }

// export default App;

// ! homework 5

// import React from "react";
// import Navbar from "./navbar";

// function App() {
//   return (
//     <div>
//       <Navbar
//         frontend={["html", "css", "js", "react", "angualr"]}
//         backend={["java", "nodejs", "expressjs", "php", "python"]}
//       >
//         <h1>first navbar call</h1>
//       </Navbar>
//       <Navbar frontend={["html", "css", "js", "react", "angualr"]}>
//         <h1>second navbar call</h1>
//       </Navbar>
//     </div>
//   );
// }

// export default App;

// ! homeWork 6

// import React from "react";
// import Navbar from "./navbar";

// function App() {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   );
// }

// export default App;

// * New Day

// import React, { Component } from "react";
// // import
// // import Jsondb from "./jsondb";
// // import json from "./db.json";
// import Intermidate from "./intermidate";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Jsondb data={json} /> */}
//         <Intermidate data={this.props.data + " APP => "} />
//       </div>
//     );
//   }
// }

// !

// import React, { Component } from "react";

// export default class App extends Component {
//   state = {
//     count: 0,
//   };
//   handle = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.state.handle}>increment</button>
//       </div>
//     );
//   }
// }

// !

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("i am printing from constructor");
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("printing static getDerived from props");
//     console.log(props);
//     console.log(state);
//     return null;
//   }
//   componentDidMount() {
//     console.log("component did mount is called here...");
//     setTimeout(() => {
//       this.setState({ count: 30 });
//     }, 2000);
//   }

//   render() {
//     console.log("component gets mounted here...");
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//       </div>
//     );
//   }
// }

// !

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("snapsot");
//     console.log(prevProps, prevState);
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("did update");
//     console.log(prevProps, prevState, snapshot);
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>increment</button>
//       </div>
//     );
//   }
// }

// todo new Day

// ? class base

// import React, { Component, createRef } from "react";

// export default class App extends Component {
//   h1Ref = createRef();
//   pRef = createRef();

//   componentDidMount() {
//     //! used to change the Html Data
//     this.h1Ref.current.style.background = "Bisque";
//     this.h1Ref.current.innerHTML = "hello React";
//     this.h1Ref.current.style.textAlign = "center";
//     this.h1Ref.current.style.textTransform = "uppercase";
//     this.pRef.current.style.background = "Aqua";
//     this.pRef.current.style.fontSize = "25px";
//     this.pRef.current.style.fontStyle = "italic";
//     this.pRef.current.style.textAlign = "justify";
//   }

//   render() {
//     console.log(this.h1Ref);
//     return (
//       <div>
//         <h1 ref={this.h1Ref}>hello world</h1>
//         <p ref={this.pRef}>
//           {" "}
//           Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
//           adipisicing elit. Facere facilis sit porro tempore id repellat vel
//           velit! Ipsum, esse sunt!
//         </p>
//       </div>
//     );
//   }
// }

// ? Functional Base

// import React, { useEffect, useRef } from "react";

// const APP = () => {
//   const h1Ref = useRef();
//   const pRef = useRef();
//   console.log(h1Ref);

//   useEffect(() => {
//     h1Ref.current.style.background = "rgba(255,0,0,0.9)";
//     h1Ref.current.style.color = "rgba(255,255,0,0.9)";
//     h1Ref.current.style.textAlign = "Center";
//     h1Ref.current.style.textTransform = "uppercase";
//     pRef.current.style.background = "aqua";
//     pRef.current.style.textAlign = "justify";
//   });
//   return (
//     <div>
//       <h1 ref={h1Ref}>hello world</h1>
//       <p ref={pRef}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cumque.
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt
//         alias odit consectetur omnis, consequuntur maiores error commodi
//         tenetur. Aperiam.
//       </p>
//     </div>
//   );
// };

// export default APP;

//? video implement

// import React, { Component, createRef } from "react";
// import Video from "../video/master.mp4";
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       play: true,
//     };
//   }
//   videoRef = createRef();

//   handle = () => {
//     this.setState({ play: !this.state.play });
//     if (this.state.play) {
//       this.videoRef.current.play();
//     } else {
//       this.videoRef.current.pause();
//     }
//   };
//   render() {
//     return (
//       <div>
//         <video
//           ref={this.videoRef}
//           src={Video}
//           width={"auto"}
//           height={"250px"}
//           onClick={this.handle}
//         ></video>
//       </div>
//     );
//   }
// }

//? using Function base video

// import React, { useRef, useState } from "react";
// import Video from "../video/master.mp4";
// // import Video from "../video/vid.mp4";
// // import Video from "../video/varun.mp4";
// function App() {
//   const [play, setplay] = useState(true);
//   let videoRef = useRef();
//   let handle = () => {
//     setplay(!play);
//     if (play) {
//       videoRef.current.play();
//     } else {
//       videoRef.current.pause();
//     }
//   };
//   return (
//     <div>
//       <video
//         ref={videoRef}
//         src={Video}
//         width="200px"
//         loop
//         onClick={handle}
//       ></video>
//     </div>
//   );
// }

// export default App;

//? Video using button

// import React, { Component, createRef } from "react";
// import Video from "../video/kedharnath.mp4";
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       play: true,
//     };
//     this.videoRef = createRef();
//   }
//   render() {
//     console.log(this.videoRef);
//     return (
//       <div>
//         <video ref={this.videoRef} width={300}>
//           <source src={Video} />
//         </video>
//         <div>
//           <button
//             onClick={() => {
//               this.videoRef.current.play();
//             }}
//             style={{ width: "100px", height: "30px" }}
//           >
//             play
//           </button>
//           <button
//             onClick={() => {
//               this.videoRef.current.pause();
//             }}
//             style={{ width: "100px", height: "30px" }}
//           >
//             pause
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

//? open camera in function base

// import React, { useRef } from "react";

// function App() {
//   let cameraRef = useRef();
//   console.log(cameraRef);
//   let getcamera = async () => {
//     let media = await navigator.mediaDevices.getUserMedia({
//       audio: true,
//       video: {
//         width: "500px",
//         height: "500px",
//       },
//     });
//     cameraRef.current.srcObject = media;
//     cameraRef.current.onloadedmetadata = function () {
//       cameraRef.current.play();
//       console.log(cameraRef);
//     };
//   };
//   return (
//     <div>
//       <video ref={cameraRef} width={400}></video>
//       <button onClick={getcamera}>capture</button>
//     </div>
//   );
// }

// export default App;

//? Forword ref

// import React from "react";
// import Parent from "./parent";
// function App() {
//   return (
//     <div>
//       <Parent />
//     </div>
//   );
// }

// export default App;

//todo New Day

import React, { Component } from "react";
import ComCSS from "./compCSS";
export default class App extends Component {
  render() {
    return (
      <div>
        <ComCSS />
      </div>
    );
  }
}
