import React from "react";
import { useState } from "react";
import GetChords from "./GetChords";
import keys from "./keys.json";




const KeyParams = () => {
  const [newKey, setNewKey] = useState(keys[0]);
  const [keyType, setKeyType] = useState("Major");

  

  

  const GetMajorChord = (X) => {
    let majorChord = [[X.notes[0]], [X.notes[2]], [X.notes[4]], [X.notes[6]]];
    return majorChord;
  };


  const myScale = GetMajorChord(newKey);

  return (
    <div className="container">
      <div className="controls">
      <h2>Select a key</h2>
      <select
        id="keylist"
        onChange={(e) => {
          setNewKey(keys.find((k) => k.name === e.target.value));
        }}
      >
        {keys.map((k) => (
          <option key={`${k.root}${k.type}`} value={k.name}>
            {k.name}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          let val = Math.floor(Math.random() * keys.length);
          document.getElementById("keylist").value = keys[val].name;
          setNewKey(keys[val]);
        }}
      >
        Surprise Me
      </button>
      </div>
      <GetChords props={newKey}/>
    </div>
  );
};

export default KeyParams;
