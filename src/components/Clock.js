/* import React, {Component} from "react"; */
import React, { useState, useEffect, useRef } from "react";

const styles = {
  clockface: {
    fontSize: 64,
    fontWeight: 500,
    textAlign: 'center',
  },
};

export default function Clock() {
  const[time, setTime] = useState(new Date());

/*   useEffect(()=> {
    const intervalId = setInterval(() => {
      console.log('This is inerval of each 1000ms => ' + Date.now());
      setTime(new Date());
    }, 1000);
    //before useEffect ejects => we can make cancellations
    //cleaning function
    //ejects before the last render
    return () => {
      console.log('If missing [] => this function calls (cleans), before each useEffect.If [] => this function calls when componentDidUnmount()');
      clearInterval(intervalId);
    };
  }, []);//depends on nothing */


  /* let intervalId = null; */ 
  //in functions when goes render() => values of variables do not save! CAN be done only with hook "useRefs"

/*   const intervalId = useRef(5); */
  const intervalId = useRef(); // for saving same id in function
  console.log('intervalId =>', intervalId)

  useEffect(()=> {
    intervalId.current = setInterval(() => {
      console.log('This is inerval of each 1000ms => ' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('If missing [] => this function calls (cleans), before each useEffect.If [] => this function calls when componentDidUnmount()');
      console.log('interval stopped from unmounting component in useEffect');
     /*  clearInterval(intervalId.current); */
      stop();
    };
  }, []);//depends on nothing

  const stop = () => {
    console.log('interval stopped from button stop');
    clearInterval(intervalId.current);
  };

  return (
      <>
        <p style={styles.clockface}>
          Local time (GMT-5): {time.toLocaleTimeString()}
        </p>
        <button type="button" onClick={stop}>
          Stop
        </button>
      </>
  )
};

/* export default class Clock extends Component {
  state = {
    time: new Date(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  stop = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <>
        <p style={styles.clockface}>
          Local time (GMT-5): {this.state.time.toLocaleTimeString()}
        </p>
        <button type="button" onClick={this.stop}>
          Stop
        </button>
      </>
    );
  }
} */