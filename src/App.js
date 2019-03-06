import React, { Component } from "react";
import ClockHand from "./components/ClockHand";
import "./App.scss";

class App extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    this.setState({
      hours: hours * 30 + 180,
      minutes: minutes * 6 + 180,
      seconds: seconds * 6 + 180
    });
  };

  render() {
    return (
      <div className="App">
        <main>
          <div className="wrapper">
            <div className="clock">
              <div className="time">
                <div className="hour-lines">
                  {Array(12)
                    .fill()
                    .map((el, i) => (
                      <div className="hour-line" key={i} />
                    ))}
                </div>
                <ClockHand name="hours" rotate={this.state.hours} />
                <ClockHand name="minutes" rotate={this.state.minutes} />
                <ClockHand name="seconds" rotate={this.state.seconds} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
