import "./App.css";
import React from "react";

import { Outlet } from "react-router-dom";
import HideAppBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <HideAppBar />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
