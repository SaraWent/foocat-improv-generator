import React from "react";
import { useState } from "react";
import GetChords from "./GetChords";
import keys from "./keys.json";




const KeyParams = () => {
  const [newKey, setNewKey] = useState(keys[0]);
  const myScale = GetChords(newKey);

  return (
    <div>
      <h2>Select a key</h2>
      <select
        id="keylist"
        onChange={(e) => {
          setNewKey(keys.find((k) => k.name === e.target.value));
        }}
        onBlur={(e) => {
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
        Random Key
      </button>
      <h3>{`notes in ${myScale[0]} ${newKey.type} key:`}</h3>
      <div>{newKey.notes.map((n) => `${n} `)}</div>
      <h3>{`notes in ${myScale[0]} ${newKey.type} (7th) chord:`}</h3>
      <div>{myScale.map((n) => `${n} `)}</div>
    </div>
  );
};

export default KeyParams;
