import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleImageResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    let imgApiKey = "bf602aabco34t729377499af62121a7a";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imgApiKey}`;
    axios.get(imgApiUrl).then(handleImageResponse);
  }
  function handleWordSearch(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <h1>Dictionary App</h1>
      <section>
        <form className="Dictionary" onSubmit={search}>
          <input
            type="search"
            placeholder="Type a word..."
            autoFocus="true"
            onChange={handleWordSearch}
          />
        </form>
        <div className="hint">
          suggested words: sunset, wine, yoga, plant, music...
        </div>
      </section>
      <Results results={results} />
      <Images photos={photos} />
    </div>
  );
}
