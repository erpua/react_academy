import React, { Component } from 'react';

//NPM dependencies
import shortid from 'shortid';

/* PATTERN for input / radiobuttons...etc. in REACT */

class Form extends Component {
  //PROPS

  //STATE
  state = {
    name: '',
    tag: '',
  };

  //LOGIC
  nameInputId = shortid.generate();

  tagInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('this.state from Form.js=>', this.state);

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  //MARKUP - RENDER
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>

        <label htmlFor={this.tagInputId}>
          Surname
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
