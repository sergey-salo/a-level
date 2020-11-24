import React from "react";

interface IProps {
  time: number;
  setIntervalId: null | NodeJS.Timeout;
}


class TimerDisplay extends React.Component<IProps, {}> {
  // constructor(props: IProps) {
  //   super(props);
  //   // console.log("Run constructor (TimerDisplay)");
  //   // console.log('Run constructor TimerDisplay ->', props, this.state);
  // }

  componentDidMount() {
    // console.log("Run - componentDidMount (TimerDisplay)");
  }

  // shouldComponentUpdate(
  //   nextProps: Readonly<IProps>,
  //   nextState: Readonly<IState>
  // ) {
  //   console.log(
  //     "Run - shouldComponentUpdate (TimerDisplay)",
  //     nextProps,
  //     nextState
  //   );
  //   return true;
  // }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>) {
    //after render
  //   console.log(
  //     "Run - componentDidUpdate (TimerDisplay)",
  //     prevProps,
  //     prevState
  //   );
  }

  componentWillUnmount() {
    // console.log("Run - componentWillUnmount (TimerDisplay)");
    if (this.props.setIntervalId) {
      clearInterval(this.props.setIntervalId);
    }
  }

  displayTime = (time: number) => {
    const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60) - hours * 60;
    const seconds = time % 60;

    const formattedTime = [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");

    return formattedTime;
  };


  render() {
    console.log("render (TimerDisplay) -> time: ", this.props.time);

    return (
      <div>
        <p>* Cold Time: <br/>
        {this.displayTime(this.props.time)}</p>
      </div>
    );
  }
}

export default TimerDisplay;