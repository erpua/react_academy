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

  //MARKUP
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
}

export default ColorPicker;
