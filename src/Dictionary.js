import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for: ${word}`);
  }
  function handleWordSearch(event) {
    setWord(event.target.value);
    console.log("Searching for:", event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1>Dictionary </h1>

      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word..."
          autoFocus="true"
          onChange={handleWordSearch}
        />
      </form>
    </div>
  );
}
