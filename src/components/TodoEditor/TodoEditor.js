/* import React, { Component } from 'react';
import { connect } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
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

    if (this.state.message !== '') {
      this.props.onSubmit(this.state.message);
      this.props.onSave();
      this.setState({ message: '' });
      return;
    }

    alert('Add note title!');
  };

  //RENDER - MARKUP
  render() {
    return (
      <form lassName="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          SAVE
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(todosOperations.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
 */

import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
import './TodoEditor.scss';

/* const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(todosOperations.addTodo(text)),
}); */

export default function TodoEditor ({onSave}) {
  // state = {
  //   message: '',
  // };

  // handleChange = e => {
  //   this.setState({ message: e.currentTarget.value });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();

  //   if (this.state.message !== '') {
  //     this.props.onSubmit(this.state.message);
  //     this.props.onSave();
  //     this.setState({ message: '' });
  //     return;
  //   }

  //   alert('Add note title!');
  // };
  
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  // const handleChange = e => {
  //   setMessage(e.currentTarget.value);
  // };

  const handleChange = useCallback(
    e => {
        setMessage(e.currentTarget.value);
    }, [] );

  /* const handleSubmit = e => {
    e.preventDefault();

    if (this.state.message !== '') {
      // this.props.onSubmit(this.state.message);
      dispatch(todosOperations.addTodo(message));
      // this.props.onSave();
      onSave();
      setMessage('');
      return;
    }
  }; */

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      //Guard close
        if(message === '') {
          return alert('Fill up the field text');
        }
      //Succesful case
        dispatch(todosOperations.addTodo(message));
        onSave();
        setMessage('');
    }, [message, dispatch, onSave]);

    return (
      <form lassName="TodoEditor" onSubmit={handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          SAVE
        </button>
      </form>
    );

};