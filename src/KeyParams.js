import { useRef, useState } from "react";
import GetChords from "./GetChords";
import keys from "./data/keys.json";
import foocat from "./img/foocat.svg";
import CircleOfFifths from "./CircleOfFifths";





const KeyParams = () => {
  const initialKeys = keys.map((n)=>n.name)
  const [selectedKeys, setSelectedKeys] = useState(initialKeys);
  const [newKey, setNewKey] = useState(keys[0]);

  const selectRef= useRef(null);


  

  const GetMajorChord = (X) => {
    let majorChord = [[X.notes[0]], [X.notes[2]], [X.notes[4]], [X.notes[6]]];
    return majorChord;
  };

  const deseKeys = (arr) => {
    for (let i = 0; i<arr.length; i++) {
      if(selectedKeys.includes(arr[i])) {
        setSelectedKeys((oldKeys)=> oldKeys.filter(key => key != arr[i]));
      } else {
        setSelectedKeys((oldKeys) => oldKeys.concat(arr[i]));
      }
    }
    console.log(`selectedKeys: ${selectedKeys}`);
  }

  const myScale = GetMajorChord(newKey);

  return (
    <div className="container">
      <div className="logo"><img src={foocat} alt="foocat logo"></img></div>
      <span className="logo-sub">Improv Generator Alpha 1.01</span>
      <div className="controls">
      <h3>Available Keys</h3>
      <p className="subtext">All keys are selected by default.<br/>click to remove ones you don't want to work with.</p>
      <CircleOfFifths deseKeys={deseKeys}/>
      <p className="subtext">choose a key, or pick a random key</p>
      
      <select
        ref={selectRef}
        id="keylist"
        onChange={(e) => {
          setNewKey(keys.find((k) => k.name === e.target.value));
        }}
      >
        {selectedKeys.map((k, index) => (
          <option key={`${k}-${index.toString()}`} value={k}>
            {k}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          let val = Math.floor(Math.random() * selectedKeys.length);
          document.getElementById("keylist").value = selectedKeys[val];
          setNewKey(keys.find(item => item.name === selectedKeys[val]));
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
