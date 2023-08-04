import axios from "axios";
import { useState } from "react";
import ListDetails from "./components/ListDetails";
import "./styles.css";
import React from "react";

export default function App() {
  const [keyWord, setKeyWord] = useState("");

  const [result, setResult] = useState(null);
  
  const [recentWords, setRecentWords] = useState([]);
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
    }
    setRecentWords([keyWord, ...recentWords]);
      setKeyWord('');
  }
  function handleClear() {
    setKeyWord("");
    setResult(null);
  }
  return (
    <body>
    <h1>Online Dictionary</h1>
    <input className="button" value={keyWord} onChange={(e) => setKeyWord(e.target.value)} />
        <button className="button" type="submit" onClick={handleSearch}>
        Search
        </button>
        <button disabled={!result} className="button" type="submit" onClick={handleClear}>
        Clear
        </button>
    <div className="parent">
      <div className="sidenav child left">
        <h3>Previous Searched Words</h3>
        <ul>
          {recentWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
      <div className="App child right">
        {result && <ListDetails {...{ result }} />}
      </div>
    </div>
    </body>
  );
}