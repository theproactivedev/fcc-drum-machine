import React from "react";
import ReactDOM from "react-dom";
import DrumPad from "./DrumPad";
import "./styles.css";

const keys = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drumPadText: "Press a key..."
    };

    this.renderDrumPads = this.renderDrumPads.bind(this);
    this.displayDrumPad = this.displayDrumPad.bind(this);
  }

  renderDrumPads() {
    let drumPads = [];
    for (let i = 0; i < keys.length; i++) {
      drumPads.push(
        <DrumPad key={i} {...keys[i]} displayDrumPad={this.displayDrumPad} />
      );
    }

    return drumPads;
  }

  displayDrumPad(name) {
    this.setState({ drumPadText: name });
  }

  render() {
    let drumPads = this.renderDrumPads();
    return (
      <div>
        <main id="drum-machine">
          <div id="display">{this.state.drumPadText}</div>
          <div>{drumPads}</div>
        </main>
        <footer>
          <a href="https://eiringonzalescodes.com">
            Developed by Eirin Gonzales
          </a>

          <div>
            <p>Photo by Drew Sal on Unsplash</p>
          </div>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
