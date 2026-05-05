import React from "react";
import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.linkedin.com/in/esther-adeogun-0b9118125/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </a>
      </header>
      <h1>Dictionary App</h1>
    </div>
  );
}
