import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  //PROPS
  static defaultProps = {};

  static propTypes = {};

  //STATE
  state = {
    activeOptionIndex: 0,
  };

  //LOGIC
  /*  makeOptionClassName(index) {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIndex) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  } */

  //MARKUP

  /*
  // {this.props.qwe.map(({ label, color }) => (
  render() {
    return (
      <div>
        <h2>
          Color Picker
          <div className="ColorPicker">
            {this.props.options.map(
              ({ label, color }, index) => (
                <button
                  key={label}
                  className="ColorPicker__option"
                  style={{
                    backgroundColor: color,
                    border:
                      index === this.state.activeOptionIndex
                        ? '5px solid black'
                        : 'none',
                  }}
                ></button>
              ),
            )}
          </div>
        </h2>
      </div>
    );
  }
} */

  /*  render() {
    return (
      <div>
        <h2>
          Color Picker
          <div className="ColorPicker">
            {this.props.options.map(
              ({ label, color }, index) => {
                const optionClasses = [
                  'ColorPicker__option',
                ];

                if (
                  index === this.state.activeOptionIndex
                ) {
                  optionClasses.push(
                    'ColorPicker__option--active',
                  );
                }

                return (
                  <button
                    key={label}
                    className={optionClasses.join(' ')}
                    style={{ backgroundColor: color }}
                  ></button>
                );
              },
            )}
          </div>
        </h2>
      </div>
    );
  } */

  /* render() {
    return (
      <div>
        <h2>
          Color Picker
          <div className="ColorPicker">
            {this.props.options.map(
              ({ label, color }, index) => {
                const optionClassName =
                  this.makeOptionClassName(index);
                return (
                  <button
                    key={label}
                    className={optionClassName}
                    style={{ backgroundColor: color }}
                  ></button>
                );
              },
            )}
          </div>
        </h2>
      </div>
    );
  } */

  //LOGIC
  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIndex) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  //MARKUP
  //onClick=this.setActiveIndex(index)} if we call function =>
  //we will recieve undefined, because function does not have return state,
  //so we need to pass reference to function, in order it to have reset the
  // current state of value
  render() {
    /*    const activeOptionLabel =
      this.props.options[this.state.activeOptionIndex];

    console.log('activeOptionLabel: =>', activeOptionLabel); */

    /*  const { label } =
      this.props.options[this.state.activeOptionIndex]; */

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
                  className={this.makeOptionClassName(
                    index,
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

export default ColorPicker;
