//Modules
import React, { Component } from 'react';

//Components
import Container from './components/Container';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import Modal from './components/Modal/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';

//JSON

//ID__GENERATOR
import shortid from 'shortid';

class App extends Component {
  //PROPS

  //STATE
  state = {
    todos: [],
    inputValue: '',
    filter: '',
    showModal: false,
  };

  //Life cycles: DO NT MAKE ARROW FUNCTION
  componentDidMount() {
    const todos = localStorage.getItem('todos');

    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      setTimeout(() => {
        this.setState({ todos: parsedTodos });
      }, 2000);
      console.log('parsedTodos=>', parsedTodos);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem(
        'todos',
        JSON.stringify(this.state.todos),
      );
    }

    if (
      this.state.todos.length > prevState.todos.length &&
      prevState.todos.length !== 0
    ) {
      this.toggleModal();
    }
  }

  //LOGIC
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  formSubmitHandler = data => {
    setTimeout(() => {
      console.log(
        'data(this.state), from App.js A_SYNC',
        data,
      );
    }, 1000);
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    }));
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  //in REACT onChange combines with
  //onInput and onBlur (onFocus)
  //MARKUP
  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount =
      this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <IconButton
          onClick={this.toggleModal}
          aria-label="Add Todo"
        >
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>
        <hr />
        <h2>Modal component</h2>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
        <div>
          <p>Total todos: {totalTodoCount}</p>
          <p>Done: {completedTodoCount}</p>
        </div>

        <hr />
        <h2>Filter component</h2>
        <br />
        <Filter
          value={filter}
          onChange={this.changeFilter}
        />
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
