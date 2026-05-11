import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
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
      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <p>
          <strong>Synonyms: </strong>
          {props.meaning.synonyms.join(", ")}
        </p>
      )}
    </div>
  );
}
