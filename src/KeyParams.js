import React from "react";
import { useState } from 'react';


const allNotes = [["A"], ["A#", "Bb"], ["B", "Cb"], ["C"], ["C#", "Db"], ["D"], ["D#", "Eb"], ["E"], ["F"], ["F#", "Gb"], ["G"], ["G#", "Ab"]];
const majorKeys = ["Ab", "A",  "Bb", "B", "Cb", "C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G"];
const minorKeys = ["A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F#", "G", "G#"];
const allKeys = [...new Set([...minorKeys,...majorKeys])];
const isMajor = true;



const GetMajorChord = (X) => {
  let first, second, third, fourth;
  let majorChord;

  for (let i = 0; i < allNotes.length; i++) {
    if (allNotes[i].includes(X)) {
      first = i;
    }
  }

  second =
    first + 4 >= allNotes.length ? 4 - (allNotes.length - first) : first + 4;
  third =
    first + 7 >= allNotes.length ? 7 - (allNotes.length - first) : first + 7;
  fourth =
    first + 11 >= allNotes.length ? 11 - (allNotes.length - first) : first + 11;

  console.log(
    `first: ${first}, note: ${allNotes[first][0]}, fourth: ${fourth}, length: ${allNotes.length}`
  );

  majorChord = [
    [allNotes[first][0]],
    [allNotes[second][0]],
    [allNotes[third][0]],
    [allNotes[fourth][0]],
  ];

  return majorChord;
};

const KeyParams = () => {
  const [newKey, setNewKey] = useState("A");
  const myScale = GetMajorChord(newKey);

  return (
    <div>
      <h2>Select a key</h2>
      <select
        onChange={(e) => {
          setNewKey(e.target.value);
          // setBreed("");
        }}
      >
        {allKeys.map((k) => (
          <option key={k} value={k}>
            {k}
          </option>
        ))}
      </select>
      <h2>All Notes</h2>
      <div>{allNotes.map((n) => `(${n}), `)}</div>
      <h2>{`notes in ${myScale[0]} ${
        isMajor ? "Major" : "minor"
      } (7th) chord: `}</h2>
      <div>{myScale.map((n) => `${n} `)}</div>
    </div>
  );
};

export default KeyParams;