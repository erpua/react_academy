import React, { useState, useEffect } from 'react';

const styles = {
  qwe: {
    width: 560,
    border: '1px solid teal',
    borderRadius: 4,
    margin: '30px 0 0 30px',
    padding: 20
  },
  btn: {
    display: 'inline-flex',
    fontSize: 20,
    margin: 4,
    cursor: 'pointer',
  },
};

// First render() | []
// Each render() | nothing
// Each render() due to changing of some state or props | [counterA, counterB etc...]
// Last render() | 

export default function Counter() {
  //state cretes only on first render of component
  const [counterA, setCounterA] = useState(0);
  //=> { counterA: 0 }, setCounterA => method for this counterA
  //Hooks don't merge state

  /* console.log('counterA =>', counterA);
  console.log('setCounterA => ', setCounterA) */

  const handleCounterAIncrement = () => {
    setCounterA(prevCounterA => prevCounterA + 1);
  };

  const [counterB, setCounterB] = useState(0);

  const handleCounterBIncrement = () => {
    setCounterB(prevCounterB => prevCounterB + 1);
  };

  //useEffect does not block code until anoother sync compiles (it is sync) => 
  //=> the app is faster comparing to componentDidMount and componentDidUpdate;
  /* 
    useEffect(() => {
      console.log('Hi, this is useEffect =>' + Date.now());
      document.title = `Clicked ${counterA + counterB} times`;
    }, [counterA, counterB]); */

  /* useEffect(() => {
      console.log('Hi, this is useEffect =>' + Date.now());
    }); // no array - processes on each render componentDidUpdate () {} */

  //---

  /* useEffect(() => {
      console.log('Hi, this is useEffect =>' + Date.now());
    }, []); // empty array - processes only on first render => componentDidMount() {} */

  //---
 
  /* useEffect(() => {
    console.log(counterA + ' Hi, this is useEffect for counterA => ' + Date.now());
  }, [counterA]); // compiles when componentDidMount, and then each render, when variable counterA from state is being changed (state / props)

  //---

  useEffect(() => {
    console.log(counterB + ' Hi, this is useEffect for counterB =>' + Date.now());
  }, [counterB]); // compiles when componentDidMount, and then each render, when variable counterB from state is being changed (state / props) */

  //---

 /*  useEffect(() => {
    console.log( counterA + ' Hi, this is useEffect for counterA + counterB =>' + counterB + Date.now());
  }, [counterA, counterB]); // counterA or counterB */

  useEffect(() => {
    const totalClicks = counterA + counterB;
    console.log(`counterA + counterB clicked together ${totalClicks} times`);
    document.title = `Clicked ${totalClicks} times`;
  }, [counterA, counterB]);

  return (
    <div style={styles.qwe}>
      <button
        style={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Clicked counterA {counterA} times
      </button>

      <button
        style={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Clicked counterB {counterB} times
      </button>
    </div>
  );
}

// export default class Counter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

// componentDidMount() {
//   const { counterA, counterB } = this.state;
//   const totalClicks = counterA + counterB;

//   document.title = `Clicked ${totalClicks} times`;
// }

// componentDidUpdate(prevProps, prevState) {
//   const { counterA, counterB } = this.state;

//   if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//     const totalClicks = counterA + counterB;

//     document.title = `Clicked ${totalClicks} times`;
//   }
// }

//   render() {
//     return (
//       <>
//         <button
//           style={styles.btn}
//           type="button"
//           onClick={this.handleCounterAIncrement}
//         >
//           Clicked counterA {this.state.counterA} times
//         </button>

//         <button
//           style={styles.btn}
//           type="button"
//           onClick={this.handleCounterBIncrement}
//         >
//           Clicked counterB {this.state.counterB} times
//         </button>
//       </>
//     );
//   }
// }