import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <Examples examples={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
    </section>
  );
}
