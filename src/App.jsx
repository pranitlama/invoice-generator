import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Inbody from "./Components/Inbody";
import Infoot from "./Components/Infoot";

function App() {
  return (
    <div className="invoice-wrapper">
      <div className="invoice">
        <div className="invoice-container">
          <Header />
          <div className="overflow-view">
            <Inbody />
          </div>
          <Infoot />
        </div>
      </div>
    </div>
  );
}

export default App;
