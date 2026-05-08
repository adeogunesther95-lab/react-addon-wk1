import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleWordSearch(event) {
    setWord(event.target.value);
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
