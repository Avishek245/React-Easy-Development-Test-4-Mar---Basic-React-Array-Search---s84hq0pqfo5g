import React, { useState } from "react";

import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta"
];
const App = () => {
  const [data, setData] = useState("");
  return (
    <div id="main">
      <h2>Search</h2>
      <input
        type="text"
        id="search-input"
        onChange={(event) => setData(event.target.value)}
      />
      <h2>Result</h2>
      <ul>
        {data.length !== 0
          ? searchArray
              .filter((value) => value.match(new RegExp(data, "i")))
              .map((name, key) => {
                return <li key={key}>{name}</li>;
              })
          : null}
      </ul>
    </div>
  );
};

export default App;
