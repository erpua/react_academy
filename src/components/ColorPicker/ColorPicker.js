import React, { Component } from 'react';
import classNames from 'classnames';
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
  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };

  /* makeOptionClassName = index => {
    const qwe = classNames('ColorPicker__option', {
      'ColorPicker__option--active': false,
    });

    console.log('qwe =>', qwe);

    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIndex) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };
 */
  makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active':
        index === this.state.activeOptionIndex,
    });
  };

  //RENDER
  /*   render() {
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
  } */
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

export default ColorPicker;
