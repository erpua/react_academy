import React, { Component } from 'react';

//NPM dependencies
import shortid from 'shortid';

/* PATTERN for input / radiobuttons...etc. in REACT */

class Form extends Component {
  //PROPS

  //STATE
  //do not set new values for that same array,
  //create new one! => immutability

  // http://react.tips/checkboxes-in-react-16/

  state = {
    name: '',
    tag: '',
    experience: 'junior',
  };

  //class public properties
  nameInputId = shortid.generate();

  tagInputId = shortid.generate();

  //LOGIC
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
        <br />

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
        <br />

        <p>Your level: </p>
        <label>
          Junior:
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
        </label>

        <label>
          Middle:
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
        </label>

        <label>
          Senior:
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
        </label>

        <br />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
