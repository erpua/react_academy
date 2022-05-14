//Modules
import React, { Component } from 'react';

//Components

import Container from './components/Container/Container';
import Form from './components/Form';

//JSON
/* SHORT HAND PROPERTY import todos from './todos.json'; */
import initialTodos from './todos.json';

class App extends Component {
  //PROPS

  //STATE
  state = {
    todos: initialTodos,
    inputValue: 'qwe',
  };

  //LOGIC
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(
        todo => todo.id !== todoId,
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log('data(this.state), from App.js SYNC', data);

    setTimeout(() => {
      console.log(
        'data(this.state), from App.js A_SYNC',
        data,
      );
    }, 1000);
  };

  //in REACT onChange combines onInput and onBlur (onFocus)
  //MARKUP
  render() {
    return (
      <Container>
        <h1>React Academy / L_4 / Forms</h1>
        {/* onSubimt in this case it.s a property */}
        <Form onSubmit={this.formSubmitHandler} />
        <Form onSubmit={this.formSubmitHandler} />
      </Container>
    );
  }
}

export default App;
