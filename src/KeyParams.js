import React from "react";
import { useState } from 'react';
import keys from "./keys.json";


const allNotes = [["A"], ["A#", "Bb"], ["B", "Cb"], ["C"], ["C#", "Db"], ["D"], ["D#", "Eb"], ["E"], ["F"], ["F#", "Gb"], ["G"], ["G#", "Ab"]];
const majorKeys = ["Ab", "A",  "Bb", "B", "Cb", "C", "C#", "Db", "D", "Eb", "E", "F", "F#", "Gb", "G"];
const minorKeys = ["A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F#", "G", "G#"];
const allKeys = [...new Set([...minorKeys,...majorKeys])];
const isMajor = true;



const GetMajorChord = (X) => {
  let first, second, third, fourth;
  let majorChord;
  let length = X.notes.length;

  

//   second =
//     4 >= length ? 4 - (length) : 4 ;
//   third =
//     first + 7 >= allNotes.length ? 7 - (allNotes.length - first) : first + 7;
//   fourth =
//     first + 11 >= allNotes.length ? 11 - (allNotes.length - first) : first + 11;

//   console.log(
//     `first: ${first}, note: ${allNotes[first][0]}, fourth: ${fourth}, length: ${allNotes.length}`
//   );

  majorChord = [
    [X.notes[0]],
    [X.notes[2]],
    [X.notes[4]],
    [X.notes[6]],
  ];

  return majorChord;
};

const KeyParams = () => {
  const [newKey, setNewKey] = useState(keys[0]);
  const myScale = GetMajorChord(newKey);

  return (
    <div>
      <h2>Select a key</h2>
      <select
        onChange={(e) => {
            // var result = myArray.find(item => item.id === 2);
          setNewKey(keys.find(k => k.name === e.target.value));
          // setBreed("");
        }}
      >
        {keys.map((k) => (
          <option key={`${k.root}${k.type}`} value={k.name}>
            {k.name}
          </option>
        ))}
      </select>
      {newKey.notes}
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