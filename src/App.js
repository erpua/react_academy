//Modules
import React, { Component } from 'react';

//Components
/* import Counter from './components/Counter'; */
/* import Dropdown from './components/Dropdown'; */
/* import ColorPicker from './components/ColorPicker'; */
import TodoList from './components/TodoList';

//JSON
/* SHORT HAND PROPERTY import todos from './todos.json'; */
import initialTodos from './todos.json';

/* const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
]; */

// <></> => Babel converts to <React.Fragment> < /React.Fragment>
//const App = () => {
//return (
//<>
//<h1>Component states-n-events</h1>
//{/* <Counter
// text="Counter Component"
//initialValue={20}
//></Counter> */}
//{/*   <Dropdown /> */}
//{/*      <ColorPicker qwe={colorPickerOptions} /> */}
//{/*  <ColorPicker options={colorPickerOptions} /> */}
//<hr />
//<TodoList />
//</>
//);
//};

class App extends Component {
  /*  state = {
    todos: [
      {
        id: 'id-1',
        text: 'Learn React basics',
        completed: false,
      },
      {
        id: 'id-2',
        text: 'Understand React Redux',
        completed: false,
      },
      {
        id: 'id-3',
        text: 'Survive Redux',
        completed: false,
      },
    ],
  }; */

  /*  state = {
    todos: todos,
  };
 */

  //SHORT HAND PROPERTY
  /*  state = {
    todos,
  };
 */
  state = {
    todos: initialTodos,
  };

  //LOGIC
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(
        todo => todo.id !== todoId,
      ),
    }));
  };

  //MARKUP
  render() {
    const { todos } = this.state;

    /* const completedTodos = todos.filter(
      todo => todo.completed,
    );
 */

    const totalTodoCount = todos.length;

    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    console.log(
      'completedTodos.length => ',
      completedTodoCount,
    );

    return (
      <>
        <h1>Component states-n-events</h1>
        {/* <Counter
          text="Counter Component"
          initialValue={20}
          ></Counter> */}
        {/*   <Dropdown /> */}
        {/*      <ColorPicker qwe={colorPickerOptions} /> */}
        {/*  <ColorPicker options={colorPickerOptions} /> */}
        <hr />

        <div>
          {/* <p>Todos general amount: {todos.length} </p> */}
          <p>Todos general amount: {totalTodoCount} </p>
          <p>
            Todos completed amount: {completedTodoCount}
          </p>
        </div>
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
        />
      </>
    );
  }
}

export default App;
