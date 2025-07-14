import { useState } from 'react';
import './App.css';
import DrumPad from './Drumpad';

const PAD_BANK = [
  {
    id: "Heater-1",
    key: "Q",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
  },
  {
    id: "Heater-2",
    key: "W",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
  },
  {
    id: "Heater-3",
    key: "E",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
  },
  {
    id: "Heater-4",
    key: "A",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
  },
  {
    id: "Clap",
    key: "S",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
  },
  {
    id: "Open-HH",
    key: "D",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
  },
  {
    id: "Kick-n-Hat",
    key: "Z",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
  },
  {
    id: "Kick",
    key: "X",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
  },
  {
    id: "Closed-HH",
    key: "C",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
  }
];
function App() {
  const [display, setDisplay] = useState("");
  return (
    <div className="container" id="drum-machine">
      <div id="display">{display || "Press a key"}</div>
      <div className="pad-bank">
        {PAD_BANK.map(pad => (
          <DrumPad
            key={pad.key}
            clipSrc={pad.url}
            keyTrigger={pad.key}
            label={pad.id}
            onPlayed={setDisplay}
          />
        ))}
      </div>
    </div>
  );
}

export default App
{/* <div id="btn-block">
        <button className="drum-pad" id='Heater-1'>
          Q
          <audio src="audio/Heater-1" className="clip" id="Q"></audio>
        </button>
        <button className="drum-pad" id='Heater-2'>
          W
          <audio src="" className="clip" id="W"></audio>
        </button>
        <button className="drum-pad" id='Closed-HH'>
          E
          <audio src="" className="clip" id="E"></audio>
        </button>
        <button className="drum-pad" id='Heater-3'>
          A
          <audio src="" className="clip" id="A"></audio>
        </button>
        <button className="drum-pad" id='Heater-4'>
          S
          <audio src="" className="clip" id="S"></audio>
        </button>
        <button className="drum-pad" id='Clap'>
          D
          <audio src="" className="clip" id="D"></audio>
        </button>
        <button className="drum-pad" id='Open-HH'>
          Z
          <audio src="" className="clip" id="Z"></audio>
        </button>
        <button className="drum-pad" id='Kick-n-Hat'>
          X
          <audio src="" className="clip" id="X"></audio>
        </button>
        <button className="drum-pad" id='Kick'>
          C
          <audio src="" className="clip" id="C"></audio>
        </button>
      </div>  */}