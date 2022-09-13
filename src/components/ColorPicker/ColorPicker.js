import React, { useState } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';

//in react hooks => props are coming straigt to function: options from colors f.e.
function ColorPicker({ options }) {
  const [activeOptIdx, setActiveOptIdx] = useState(0);

  const setActiveIdx = index => {
    setActiveOptIdx(index);
  };

  const makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === activeOptIdx,
    });
  };

  /*   const activeIdx = options[activeOptIdx]; */
  const { label } = options[activeOptIdx];

  return ( 
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Picked color: {label}</p>
      <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => setActiveIdx(index)}
              >
            </button>
          ))}
      </div>
    </div>
  )
};

export default ColorPicker;


// class ColorPicker extends PureComponent {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

// makeOptionClassName = index => {
//   return classNames('ColorPicker__option', {
//     'ColorPicker__option--active': index === this.state.activeOptionIdx,
//   });
// };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];

//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>Picked Color: {label}</p>
//         <div>
//           {options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               className={this.makeOptionClassName(index)}
//               style={{
//                 backgroundColor: color,
//               }}
//               onClick={() => this.setActiveIdx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;


/* class ColorPicker extends PureComponent {
  //PROPS
  static defaultProps = {};

  static propTypes = {};

  //STATE
  state = {
    activeOptionIndex: 0,
  };

  //LOGIC
  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };

  makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active':
        index === this.state.activeOptionIndex,
    });
  };

  //RENDER
  render() {
    const { activeOptionIndex } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIndex];

    return (
      <div>
        <h2>
          Color Picker
          <div className="ColorPicker">
            <p>Chosen: {label}</p>
            {options.map(({ label, color }, index) => {
              return (
                <button
                  key={label}
                  className={classNames(
                    'ColorPicker__option',
                    {
                      'ColorPicker__option--active':
                        index === activeOptionIndex,
                    },
                  )}
                  style={{ backgroundColor: color }}
                  onClick={() => this.setActiveIndex(index)}
                ></button>
              );
            })}
          </div>
        </h2>
      </div>
    );
  }
}

export default ColorPicker; */
