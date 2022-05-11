//Modules
import React, { Component } from 'react';

//Components
/* import Counter from './components/Counter'; */
/* import Dropdown from './components/Dropdown'; */
/* import ColorPicker from './components/ColorPicker'; */
/* import TodoList from './components/TodoList'; */
import Container from './components/Container/Container';

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
];
 */
class App extends Component {
  //PROPS

  //STATE
  state = {
    todos: initialTodos,
    inputValue: 'qwe',
    name: '',
    tag: '',
  };

  //LOGIC
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(
        todo => todo.id !== todoId,
      ),
    }));
  };

  /*  handleInputChange = event => {
    console.log('input event =>', event);
    console.log(
      'event.currentTarget.value =>',
      event.currentTarget.value,
    );

    this.setState({
      inputValue: event.currentTarget.value,
    });
  }; */

  /*  handleNameChange = event => {
    console.log(
      'name event value:',
      event.currentTarget.value,
    );

    this.setState({
      name: event.currentTarget.value,
    });
  }; */

  /*  handleTagChange = event => {
    console.log(
      'tag event value:',
      event.currentTarget.value,
    );
    this.setState({ tag: event.currentTarget.value });
  }; */

  handleChange = event => {
    console.log(
      'event.curentTarget: =>',
      event.currentTarget,
    );
    console.log(
      'event.curentTarget.name: =>',
      event.currentTarget.name,
    );
    console.log(
      'event.curentTarget.value: =>',
      event.currentTarget.value,
    );

    /*   
    const a = 'qweqwe';

    this.setState({
      [a]: 5,
    });

    {
      qweqwe: 5;
    } 
    */

    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  //in REACT onChange combines onInput and onBlur (onFocus)
  //MARKUP
  render() {
    return (
      <Container>
        <h1>React Academy / L_4 / Forms</h1>

        {/*  <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */}

        {/*  
      eventListener for each input
      
       <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>

          <label>
            Surname
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleTagChange}
            />
          </label>
        </form> */}

        <form>
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
        </form>

        {/* <Counter
          text="Counter Component"
          initialValue={20}
          ></Counter> */}
        {/*   <Dropdown /> */}
        {/*      <ColorPicker qwe={colorPickerOptions} /> */}
        {/*  <ColorPicker options={colorPickerOptions} /> */}
        <div>
          {/* <p>Todos general amount: {todos.length} </p> */}
          {/* <p>Todos general amount: {totalTodoCount} </p>
          <p>
            Todos completed amount: {completedTodoCount}
          </p> */}
        </div>
        {/* <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
        /> */}
      </Container>
    );
  }
}

export default App;
