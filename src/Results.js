import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <p>
            {props.results.phonetic}
            {props.results.phonetics &&
              props.results.phonetics[0] &&
              props.results.phonetics[0].audio && (
                <button
                  onClick={() => {
                    new Audio(props.results.phonetics[0].audio).play();
                  }}
                  style={{ marginLeft: "10px" }}
                >
                  🔊
                </button>
              )}
          </p>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
