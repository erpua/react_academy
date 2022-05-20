//Modules
import React, { Component } from 'react';

//Components
import Container from './components/Container';
import TodoList from './components/TodoList';
import ColorPicker from './components/ColorPicker';
import Form from './components/Form';
import TodoEditor from './components/TodoEditor';

//JSON
/* SHORT HAND PROPERTY import todos from './todos.json'; */
import initialTodos from './todos.json';

//ID__GENERATOR
import shortid from 'shortid';

class App extends Component {
  //PROPS

  //STATE
  state = {
    todos: initialTodos,
    inputValue: '',
  };

  //LOGIC
  addTodo = text => {
    console.log('text fom addTodo / App.js=>', text);

    /* const todo = {
      id: shortid.generate(),
      text: text,s
      completed: false,
    }; */
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    /* this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    })); */
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

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

  toggleCompleted = todoId => {
    console.log('todoId=> ', todoId);

    /*  this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('We found needed todo');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    })); */

    /*   this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    })); */

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    }));
  };

  //in REACT onChange combines onInput and onBlur (onFocus)
  //MARKUP
  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <Container>
        <h1>React Academy / L_4 / Forms</h1>

        <div>
          <p>Total todos: {totalTodoCount}</p>
          <p>Done: {completedTodoCount}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />

        <hr />
        <h2>TodoList component</h2>
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        <hr />
        <ColorPicker
          options={[
            { label: 'red', color: '#F44336' },
            { label: 'green', color: '#4CAF50' },
            { label: 'blue', color: '#2196F3' },
            { label: 'grey', color: '#607D8B' },
            { label: 'pink', color: '#E91E63' },
            { label: 'indigo', color: '#3F51B5' },
          ]}
        />

        <hr />
        {/* onSubimt in this case it.s a property */}
        {/*  <Form onSubmit={this.formSubmitHandler} /> */}
        <Form onSubmit={this.formSubmitHandler} />
      </Container>
    );
  }
}

export default App;

/* const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
]; */
