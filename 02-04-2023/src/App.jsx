// ? project
// import React, { Component } from "react";
// import Navbar from "./components/auth/Navbar";
// import Mainbody from "./components/main/Mainbody";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <Mainbody />
//       </div>
//     );
//   }
// }

// ? examples
// import React, { Component } from "react";
// import Usestateex1 from "./components/Examples/Usestateex1";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Usestateex1 />
//       </div>
//     );
//   }
// }

// ? HOC

import React, { Component } from "react";
import GlobalHOC from "./components/HOC/GlobalHOC";
export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalHOC />
      </div>
    );
  }
}
