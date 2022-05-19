//Modules
import React, { Component } from 'react';

//Components
import Container from './components/Container/Container';
import Form from './components/Form';
import Checkbox from './components/Checkbox/Checkbox';
import ColorPicker from './components/ColorPicker/ColorPicker';
import TodoList from './components/TodoList/TodoList';

//JSON
/* SHORT HAND PROPERTY import todos from './todos.json'; */
import initialTodos from './todos.json';

const OPTIONS = ['One', 'Two', 'Three'];

class App extends Component {
  //PROPS

  //STATE
  state = {
    todos: initialTodos,
    inputValue: 'qwe',
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {},
    ),
  };

  //LOGIC CHECKBOXES
  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    /*   console.log(
      ' const { name } = changeEvent.target =>',
      name,
    );

    console.log(' const [name]', [name]); */

    /* console.log(
          'prevState.checkboxes[name]',
          prevState.checkboxes[name],
        ) */
    /* this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [changeEvent.target.name]:
          !prevState.checkboxes[changeEvent.target.name],
      },
    })); */

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));

    console.log('[event.target.name] => ', [
      changeEvent.target.name,
    ]);

    console.log(
      'prevState.checkboxes[changeEvent.target.name] => ',
      this.state.checkboxes[changeEvent.target.name],
    );
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log(
      'Object.keys(this.state.checkboxes)=>',
      Object.keys(this.state.checkboxes),
    );

    Object.keys(
      this.state.checkboxes
        .filter(checkbox => this.state.checkboxes[checkbox])
        .forEach(checkbox => {
          console.log(checkbox, 'is selected');
        }),
    );
  };

  /*  createCheckbox = option => (
    console.log('option =>', option),
    (
      <Checkbox
        label={option}
        isSelected={this.state.checkboxes[option]}
        onCheckboxChange={this.handleCheckboxChange}
        key={option}
      />
    )
  ); */

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  //LOGIC REACT ACADEMY
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

    this.setState(prevState => ({
      todo: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('We found todo we needed');
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  //in REACT onChange combines onInput and onBlur (onFocus)
  //MARKUP
  render() {
    const { todos } = this.state;

    return (
      <Container>
        <h1>React Academy / L_4 / Forms</h1>
        <hr />
        <hr /> <br />
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
        <hr />
        <br />
        <h2>Checkbox component</h2>
        {/*    <Checkbox /> */}
        <form onSubmit={this.handleFormSubmit}>
          {this.createCheckboxes()}

          <div className="form-group mt-2">
            <button type="button" onClick={this.selectAll}>
              Select All
            </button>
            <button
              type="button"
              onClick={this.deselectAll}
            >
              Deselect All
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
        <hr />
        <br />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
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
