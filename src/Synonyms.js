import React from "react";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      {props.synonyms && props.synonyms.length > 0 && (
        <div>
          <p>
            <strong>Synonyms:</strong> {props.synonyms.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}
