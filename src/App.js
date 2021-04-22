import "./App.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { sympTomDiease } from "./constants";
import { normalizedSymtomDisease } from "./constants/normalizedSymtompDisease";
import { useState } from "react";

function App() {
  const [disease, setDisease] = useState({ name: "", root: "" });
  const items = [...normalizedSymtomDisease, ...sympTomDiease];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnSelect = (item) => {
    // the item selected
    setDisease(sympTomDiease[+item.id.replace("normalized-", "") - 1]);
  };

  const handleOnFocus = () => {};

  return (
    <div className="App">
      <header className="App-header">
        {disease && disease.id && (
          <div style={{ width: 400, marginBottom: 50 }}>
            {sympTomDiease[+disease.id.replace("normalized-", "") - 1].root}
          </div>
        )}
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
          <div style={{ width: 400, marginTop: 20 }}>
            Nguồn bài báo:{" "}
            <a href="http://shorturl.at/uERS4" target="_blank" rel="noreferrer">
              shorturl.at/uERS4
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
