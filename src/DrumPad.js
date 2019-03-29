import React from "react";
import ReactDOM from "react-dom";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.playSound = this.playSound.bind(this);
    this.playSoundOnKeyDown = this.playSoundOnKeyDown.bind(this);
  }

  playSound(keyTrigger) {
    const element = document.getElementById(keyTrigger);
    element.play();
    // play a function from the parent where it displays the .drum-pad's id attribute
    this.props.displayDrumPad(this.props.id);
  }

  playSoundOnKeyDown(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound(this.props.keyTrigger);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.playSoundOnKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.playSoundOnKeyDown);
  }

  render() {
    const { keyTrigger, id, url } = this.props;

    return (
      <div
        className="drum-pad"
        id={id}
        onClick={() => this.playSound(keyTrigger)}
      >
        {keyTrigger}
        <audio src={url} className="clip" id={keyTrigger} />
      </div>
    );
  }
}

export default DrumPad;
