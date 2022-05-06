import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  /*   //STATE
  state = {
    visible: false,
  };

  //LOGIC
  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  //MARKUP
  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown__toggle" onClick={this.show}>
          Show
        </button>

        <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Hide
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">Dropdown Menu</div>
        )}
      </div>
    );
  }
} */

  //STATES
  state = {
    visible: false,
  };

  //LOGIC
  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  //MARKUP
  render() {
    const { visible } = this.state;

    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'Hide' : 'Show'}
        </button>

        {visible && (
          <div className="Dropdown__menu">
            Dropdown Menu
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
