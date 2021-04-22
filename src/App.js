import "./App.css";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { sympTomDiease, normalizedSymtomDisease } from "./constants";
import { useState } from "react";

function App() {
  const [disease, setDisease] = useState({ name: "", root: "" });
  const items = [...sympTomDiease, ...normalizedSymtomDisease];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    setDisease(sympTomDiease[item.id]);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  return (
    <div className="App">
      <header className="App-header">
        {disease && (
          <div style={{ width: 400, marginBottom: 50 }}>{disease.root}</div>
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
            <a href="http://shorturl.at/uERS4" target="_blank">
              shorturl.at/uERS4
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
