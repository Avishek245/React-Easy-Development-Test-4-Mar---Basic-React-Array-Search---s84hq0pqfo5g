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
  const [search, setSearchItem] = useState("");
  return (
    <div id="main">
      <h2>Search</h2>
      <input
        type="text"
        id="search-input"
        onChange={(event) => setSearchItem(event.target.value)}
      />
      <h2>Result </h2>
      {searchArray
        .map((value, key) => {
          return <div>{value}</div>;
        })
        .filter((value) => {
          if (value.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })}
    </div>
  );
};

export default App;
