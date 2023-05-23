import React from "react";
import "./Examples.css";

export default function Examples(props) {
  if (props.examples) {
    return <p className="Examples">{props.examples}</p>;
  } else {
    return null;
  }
}
