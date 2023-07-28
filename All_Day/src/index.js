// import ReactDOM from "react-dom";

// import Navbar from "./components/navbar";
// import "./global.css";

// ReactDOM.render(<Navbar />, document.querySelector("#root"), () => {
//   console.log("connected");
// });

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";

import "./CSS/global.css";
createRoot(document.querySelector("#root")).render(<App />);
