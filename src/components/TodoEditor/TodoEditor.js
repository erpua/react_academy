import React, { Component } from 'react';
import './TodoEditor.scss';

class TodoEditor extends Component {
  //PROPS

  //STATE
  state = {
    message: '',
  };

  //LOGIC

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(
      'this.state.message from TodoEditor.js =>---',
      this.state.message,
    );

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  //RENDER - MARKUP
  render() {
    return (
      <form
        className="TodoEditor"
        onSubmit={this.handleSubmit}
      >
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button
          type="submit"
          className="TodoEditor__button"
        >
          SAVE
        </button>
      </form>
    );
  }
}

export default TodoEditor;
