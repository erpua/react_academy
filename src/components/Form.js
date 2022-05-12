import React, { Component } from 'react';

/* PATTERN for input / radiobuttons...etc. in REACT */

class Form extends Component {
  //PROPS

  //STATE
  state = {
    name: '',
    tag: '',
  };

  //LOGIC
  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('this.state from Form.js=>', this.state);

    this.props.onSubmit(this.state);
  };

  //MARKUP - RENDER
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Surname
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
