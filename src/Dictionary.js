import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data);
  }

  function handleImgApiResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // Documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=8teb9f1fao00b420ac25b3a87666cdf6`;
    axios.get(apiUrl).then(handleDictionResponse);

    // Documentation: https://www.shecodes.io/learn/apis/images
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=8teb9f1fao00b420ac25b3a87666cdf6`;
    axios.get(imageApiUrl).then(handleImgApiResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h4>What word do you want to look up?</h4>
          <form className="text-center" onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue="sunset"
            />
          </form>
          <div className="hint">i.e. sunset, sunrise, yoga, plant...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
