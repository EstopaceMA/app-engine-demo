import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Deployed using</p>
        <a
          className="App-link"
          href="https://cloud.google.com/appengine/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google App Engine
        </a>
      </header>
    </div>
  );
}

export default App;
