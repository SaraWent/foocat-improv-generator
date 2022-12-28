import React from "react";
import { useState } from "react";
import chords from "./chords.json";


const GetChords = (props) => {

    console.log(props);
    return (
        <div>
            <h3>{`notes in ${props.root[0]} ${props.type} key:`}</h3>
             <div>{props.notes.map((n) => `${n} `)}</div>


            <h3>{`chords in ${props.root[0]} ${props.type} key:`}</h3>

            {chords.map((c) => (
            <p>
            <b>{c.name}: {props.root} {c.type}: </b> 
            {props.notes[c.i[0]]}, 
            {props.notes[c.i[1]]}, 
            {props.notes[c.i[2]]},
            {props.notes[c.i[3]]}
            </p>
        ))}     
           
        </div>
    );
};

export default GetChords;