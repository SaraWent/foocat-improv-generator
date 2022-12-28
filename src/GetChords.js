import React from "react";
import { useState } from "react";




const GetChords = (X) => {
    let majorChord;
    majorChord = [[X.notes[0]], [X.notes[2]], [X.notes[4]], [X.notes[6]]];
    return majorChord;
  };


  export default GetChords;