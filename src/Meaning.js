import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h5>
        <strong>{props.meaning.partOfSpeech}</strong>
      </h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>{index + 1}.</strong> {definition.definition}
            </p>
            {definition.example && (
              <p>
                <em>Example: {definition.example}</em>
              </p>
            )}
          </div>
        );
      })}
      <section>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
