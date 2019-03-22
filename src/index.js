import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./COMPONENTS/Navbar";
import "./style.scss";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
