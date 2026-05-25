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
        <br />
        <hr />
        <footer className="App-footer">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/esther-adeogun-0b9118125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              {" "}
              <small>
                Created by Esther Adeogun, open-sourced on
                <a
                  className="App-link"
                  href="https://github.com/adeogunesther95-lab/react-addon-wk1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                and hosted on
                <a
                  className="App-link"
                  href="https://ea-dictionary-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Netlify
                </a>
              </small>{" "}
            </strong>
          </a>
        </footer>
      </div>
    </div>
  );
}
