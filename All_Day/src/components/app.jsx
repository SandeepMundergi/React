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

export default App;

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

import React, { Component } from 'react'
// import 
export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}
