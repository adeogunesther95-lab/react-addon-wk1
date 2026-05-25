import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.photos) {
    return (
      <section className="Images">
        <h2>Images</h2>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-md-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
