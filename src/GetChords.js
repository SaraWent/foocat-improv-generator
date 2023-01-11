import React from "react";
import minorChords from "./data/minorChords.json";
import majorChords from "./data/majorChords.json";

const GetChords = ({ props }) => {
  let majorProg = [
    ["I", "IV", "V"],
    ["I", "vi", "IV", "V"],
    ["ii", "V", "I"],
  ];
  let minorProg = [
    ["i", "VI", "VII"],
    ["i", "iv", "VII"],
    ["i", "iv", "v"],
    ["i", "VI", "III", "VII"],
    ["ii", "v", "i"],
  ];
  let thisKey;
  let thisProg;

  if (props.type === "major") {
    thisKey = majorChords;
    thisProg = majorProg;
  } else {
    thisKey = minorChords;
    thisProg = minorProg;
  }

  return (
    <div>
      <h3>
        notes in {props.root[0]}
        <span className="ss">{props.root[1] ? props.root[1] : ""}</span>{" "}
        {props.type} key:
      </h3>
      {props.notes.map((n, index) => (
        <span key={`${n.name}-${index.toString()}`}>
          {n[0]}
          <span className="ss">{n[1] ? n[1] : ""}</span>{" "}
        </span>
      ))}
        

      <h3>
        chords in {props.root[0]}
        <span className="ss">{props.root[1] ? props.root[1] : ""}</span>{" "}
        {props.type} key:
      </h3>

      <div className="all-chords">
        {thisKey.map((c, index) => (
          <div className="all-notes" key={`${c.name}-${index.toString()}`}>
            <b>
              <span className="chord-type">{c.name}:</span>
              <span className="chord-name">
                {props.root[0]}
                <span className="ss">
                  {props.root[1] ? props.root[1] : ""}
                </span>{" "}
                {c.type[1]}:{" "}
              </span>
            </b>
            <div className="notes">
              <span className="note">
                {props.notes[c.i[0]][0]}
                <span className="ssf">
                  {props.notes[c.i[0]][1] ? props.notes[c.i[0]][1] : ""}
                </span>
              </span>
              <span className="note">
                {props.notes[c.i[1]][0]}
                <span className="ssf">
                  {props.notes[c.i[1]][1] ? props.notes[c.i[1]][1] : ""}
                </span>
              </span>
              <span className="note">
                {props.notes[c.i[2]][0]}
                <span className="ssf">
                  {props.notes[c.i[2]][1] ? props.notes[c.i[2]][1] : ""}
                </span>
              </span>
              <span className="note">
                {props.notes[c.i[3]][0]}
                <span className="ssf">
                  {props.notes[c.i[3]][1] ? props.notes[c.i[3]][1] : ""}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <h3>common chord progressions:</h3>
        {thisProg.map((p, index) => {
          return (
            <div key={`${p.name}-${index.toString()}`} className="chordProg">
              {p.map((c, index) => {
                return (
                  <span key={`${c.name}-${index.toString()}`} className="prog">
                    <span className="prog-sm"><b>{`${c}: `}</b></span>
                    {thisKey
                      .filter((key) => key.name === c)
                      .map((filteredKey, index) => (
                        <span key={`${filteredKey.name}-${index.toString()}`}>
                          {props.notes[filteredKey.i[0]][0]}<span className="ss">{props.notes[filteredKey.i[0]][1]}</span>
                          <span className="prog-sm">{filteredKey.type[0] === "major" ? "M" : "m"}</span>
                        </span>
                      ))}
                  </span>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default GetChords;
