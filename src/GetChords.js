import React from "react";
import minorChords from "./data/minorChords.json";
import majorChords from "./data/majorChords.json";

const GetChords = ({props}) => {

    let thisKey = majorChords;

    if (props.type === "Major") {
        thisKey = majorChords;
    } else {
        thisKey = minorChords;
    };

    return (
        <div>
            <h3>notes in {props.root[0]}<span className="ss">{props.root[1] ? props.root[1] : ""}</span> {props.type} key:</h3>
            {props.notes.map((n) => (
                <span key={n.name}>{n[0]}<span className="ss">{n[1] ? n[1] : ""}</span> </span>
            ))}

            <h3>chords in {props.root[0]}<span className="ss">{props.root[1] ? props.root[1] : ""}</span> {props.type} key:</h3>

            {thisKey.map((c) => (
            <div className="all-notes" key={c.name}>
            <b>
                <span className="chord-type">{c.name}:</span> 
                <span className="chord-name">{props.root[0]}<span className="ss">{props.root[1] ? props.root[1] : ""}</span> {c.type[1]}: </span>
            </b> 
            <div className="notes">
            <span className="note">
                {props.notes[c.i[0]][0]}<span className="ssf">{props.notes[c.i[0]][1] ? props.notes[c.i[0]][1] : ""}</span> 
            </span>
            <span className="note">
                {props.notes[c.i[1]][0]}<span className="ssf">{props.notes[c.i[1]][1] ? props.notes[c.i[1]][1] : ""}</span> 
            </span>
            <span className="note">
                {props.notes[c.i[2]][0]}<span className="ssf">{props.notes[c.i[2]][1] ? props.notes[c.i[2]][1] : ""}</span> 
            </span>
            <span className="note">
                {props.notes[c.i[3]][0]}<span className="ssf">{props.notes[c.i[3]][1] ? props.notes[c.i[3]][1] : ""}</span> 
            </span>
            </div>
            </div>
        ))}     
           
        </div>
    );
};

export default GetChords;