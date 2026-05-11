import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    console.log(props.results);

    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <div>
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
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
