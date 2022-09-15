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

// First render()
// Each render()
// Each render() due to changing of some state or props
// Last render()

export default function Counter() {
  //state cretes only on first render of component
  const [counterA, setCounterA] = useState(0);
  //=> { counterA: 0 }, setCounterA => method for this counterA
  //Hooks don't merge state

  console.log('counterA =>', counterA);
  console.log('setCounterA => ', setCounterA)

  const handleCounterAIncrement = () => {
    setCounterA(prevCounterA => prevCounterA + 1);
  };

  const [counterB, setCounterB] = useState(0);

  const handleCounterBIncrement = () => {
    setCounterB(prevCounterB => prevCounterB + 1);
  };

  useEffect(() => {
    document.title = `Clicked ${counterA + counterB} times`;
  }, [counterA, counterB]);
  //TODO://terminate useEffect


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