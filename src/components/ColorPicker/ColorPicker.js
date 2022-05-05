import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  render() {
    return (
      <div>
        <h2>
          Color Picker
          <div className="ColorPicker">
            {this.props.options.map(({ label, color }) => (
              <span
                key={label}
                className="ColorPicker__option"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
        </h2>
      </div>
    );
  }
}

export default ColorPicker;
