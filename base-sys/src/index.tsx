import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";

const render = () => {
  ReactDOM.render(<App />, document.getElementById("base-sys-root"));
};
