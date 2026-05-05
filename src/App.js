import React from "react";
import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
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
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/esther-adeogun-0b9118125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small>Created by Esther Adeogun</small>
          </a>
        </footer>
      </div>
    </div>
  );
}
