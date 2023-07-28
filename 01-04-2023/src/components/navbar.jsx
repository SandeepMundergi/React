// ! function base component

// import React from "react";

// import Logo from "./logo";
// import Menu from "./menu";

// function Navbar(props) {
// function Navbar({ name, age, company, salary }) {
//   console.log(props);
//   return (
//     <section>
//       <article>
//         <Logo />
//         <Menu />
//       </article>
//       <aside>
//         <ol>
//           <li>{name}</li>
//           <li>{age}</li>
//           <li>{company}</li>
//           <li>{salary}</li>
//         </ol>
//       </aside>
//     </section>
//   );
// }

// export default Navbar;

// ! class base component {rcc}

// import React, { Component } from "react";

// import Logo from "./logo";
// import Menu from "./menu";

// export default class Navbar extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <section>
//         <article>
//           <Logo />
//           <Menu />
//         </article>
//         <aside>
//           <h1>Details</h1>
//           <h2>{this.props.user.name}</h2>
//           <h2>{this.props.user.company}</h2>
//           <h2>{this.props.user.salary}</h2>
//           <h2>{this.props.user.name2}</h2>
//           <h2>{this.props.user.company2}</h2>
//           <h2>{this.props.user.salary2}</h2>
//         </aside>
//       </section>
//     );
//   }
// }

// ! class base component {rcc}

// import React, { Component } from "react";

// import Logo from "./logo";
// import Menu from "./menu";

// export default class Navbar extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <section>
//         <article>
//           <Logo />
//           <Menu />
//         </article>
//         <aside>
//           <h1>Details</h1>

//           {this.props.arr.map((x) => {
//             return <li>{x}</li>;
//           })}

//         </aside>
//       </section>
//     );
//   }
// }

// import React, { Component } from "react";
// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.value}>click me</button>
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.children}
//         {this.props.name}
//         {this.props.age}
//         {this.props.company}
//       </div>
//     );
//   }
// }
// Navbar.defaultProps = {
//   name: "abc",
//   age: "NA",
//   company: "xyz",
// };

// import React, { Component } from "react";

// export default class Navbar extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         {this.props.username}
//         {this.props.age}
//         {this.props.city}
//         {this.props.area}
//         {this.props.pin}
//         {this.props.children}
//       </div>
//     );
//   }
// }

// Navbar.defaultProps = {
//   username: "XYZ",
//   age: 25,
//   city: "Hospet",
//   area: "LLc colony",
//   pin: "000000",
// };

// import React, { Component } from "react";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
// {this.props.children}
// {this.props.frontend.map(x=>{
//   return(
//     <>
//     <li>{x}</li>
//     </>
//   )
// })}
// {this.props.backend.map(x=>{
//   return(
//     <>
//     <li>{x}</li>
//     </>
//   )
// })}
//       </div>
//     )
//   }
// }
// Navbar.defaultProps = {
//   backend: ["java", "Javascript"],
// };

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.username}
//         {this.props.age}
//         {this.props.arr.map((x) => {
//           return <li>{x}</li>;
//         })}
//         {this.props.obj.name}
//       </div>
//     );
//   }
// }
// Navbar.propTypes = {
//   username: PropTypes.string,
//   age: PropTypes.number,
//   arr: PropTypes.array,
//   obj: PropTypes.object,
// };

// ! homeWork 1

// import React from "react";
// import Logo from "./logo";
// import Menu from "./menu";

// function Navbar(props) {
//   console.log(props);
//   return (
//     <div>
//       <section>
//         <article>
//           <Logo />
//           <Menu />
//         </article>
//       </section>
//       <h1>{props.data.name}</h1>
//       <h1>{props.data.company}</h1>
//       <h1>{props.data.salary}</h1>
//       <h1>{props.data.state}</h1>
//       <h1>{props.data.city}</h1>
//       <h1>{props.data.pin}</h1>
//     </div>
//   );
// }

// export default Navbar;

// ! homeWork 2

// import React from "react";

// function Navbar(props) {
//   console.log(props);
//   return (
//     <div>
//       {props.data.map((x) => {
//         return <li>{x}</li>;
//       })}
//     </div>
//   );
// }

// export default Navbar;

// ! homeWork 3

// import React from "react";

// function Navbar(props) {
//   console.log(props);
//   return (
//     <div>
//       <button onClick={props.data}>click me</button>
//     </div>
//   );
// }

// export default Navbar;

// ! homeWork 4

// import React from "react";

// function Navbar(props) {
//   console.log(props);
//   return (
//     <div>
//       {props.name}
//       {props.age}
//       {props.company}
//     </div>
//   );
// }

// export default Navbar;

// Navbar.defaultProps = {
//   name: " NA ",
//   age: " 00 ",
//   company: " Don't worry ",
// };

// ! homeWork 5

// import React from "react";

// function Navbar(props) {
//   console.log(props);
//   return (
//     <div>
//       {props.children}
//       {props.frontend.map((x) => {
//         return (
//           <>
//             <li>{x}</li>
//           </>
//         );
//       })}
//       {props.backend.map((x) => {
//         return (
//           <>
//             <li>{x}</li>
//           </>
//         );
//       })}
//     </div>
//   );
// }
// export default Navbar;
// Navbar.defaultProps = {
//   backend: ["java", "Javascript"],
// };

// ! homeWork 6

// import React from "react";

// function Navbar() {
//   return <div>Navbar</div>;
// }

// export default Navbar;
