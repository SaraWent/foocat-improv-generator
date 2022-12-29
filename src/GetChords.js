import React from "react";
import minorChords from "./minorChords.json";
import majorChords from "./majorChords.json";

const GetChords = ({props}) => {

    let thisKey = majorChords;

    if (props.type === "Major") {
        thisKey = majorChords;
    } else {
        thisKey = minorChords;
    };

    return (
        <div>
            <h3>{`notes in ${props.root[0]} ${props.type} key:`}</h3>
            <div className="notes">{props.notes.map((n) => (
                <span className="note" key={n.name}>{n}</span>
            ))}</div>

            <h3>{`chords in ${props.root[0]} ${props.type} key:`}</h3>

            {thisKey.map((c) => (
            <div className="all-notes" key={c.name}>
            <b>
                <span className="chord-type">{c.name}:</span> 
                <span className="chord-name">{props.root} {c.type[1]}: </span>
            </b> 
            <div className="notes">
            <span className="note">{props.notes[c.i[0]]}, </span>
            <span className="note">{props.notes[c.i[1]]}, </span>
            <span className="note">{props.notes[c.i[2]]}, </span>
            <span className="note">{props.notes[c.i[3]]} </span>
            </div>
            </div>
        ))}     
           
        </div>
    );
};

export default GetChords;