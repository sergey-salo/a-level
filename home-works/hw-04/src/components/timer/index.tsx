import React from "react";
import TimerDisplay from "./timerDisplay";

interface IState {
  isButtonPressed: boolean;
  buttonText: string;
  time: number;
  setIntervalId: null | NodeJS.Timeout;
}

class Timer extends React.Component<{}, IState> {
  public state: IState = {
    isButtonPressed: false,
    buttonText: "Start",
    time: 0,
    setIntervalId: null,
  };

  // constructor(props: {}) {
  //   super(props);
  //   // console.log("Run constructor (Index)");
  //   // console.log('Run constructor Index -> ', props, this.state);
  // }

  componentDidMount() {
    //console.log("Run - componentDidMount (Index)");
  }

  // shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<IState>) {
  //   console.log("Run - shouldComponentUpdate (Index)", nextProps, nextState);
  //   return true;
  // }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>) {
    //after render
    // console.log("Run - componentDidUpdate (Index)", prevProps, prevState);
  }

  componentWillUnmount() {
    // console.log("Run - componentWillUnmount (Index)");
  }

  buttonClick = () => {
    let timerId: null | NodeJS.Timeout = null;
    if (!this.state.isButtonPressed) {
      timerId = setInterval(
        () => this.setState((state) => ({ time: state.time + 1 })),
        1000
      );
    }

    this.setState((state) => ({
      isButtonPressed: !state.isButtonPressed,
      buttonText: state.isButtonPressed ? "Start" : "Stop",
      setIntervalId: timerId,
      time: this.state.isButtonPressed ? 0 : this.state.time,
    }));
  };


  render() {
    console.log("render (Index) -> time -> ", this.state.time);

    return (
      <>
        <button onClick={this.buttonClick}>{this.state.buttonText}</button>
        {this.state.isButtonPressed && (
          <TimerDisplay
            time={this.state.time}
            setIntervalId={this.state.setIntervalId}
          />
        )}
      </>
    );
  }
}

export default Timer;
