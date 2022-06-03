import React, { Component } from 'react';
import axios from 'axios';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import Filter from '../components/TodoFilter';
import Stats from '../components/Stats';
import TodoEditor from '../components/TodoEditor';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
/* import todosApi from '../services/todos-api'; */

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosView extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  //ASYNC coomponent DidMount
  /*  async componentDidMount() {
    const response = await axios.get(
      'http://localhost:3000/todos',
    );

    console.log('RESPONSE.DATA', response.data);
  } */

  componentDidMount() {
    /*   todosApi
      .fetchTodos()
      .then(todos => this.setState({ todos }))
      .catch(error => console.log(error)); */

    /*   axios
      .get('http://localhost:3000/todos')
      .then(response => {
        console.log(
          'response from AXIOS =>:',
          response.data,
        );
      }); */
    /*  axios
      .get('http://localhost:3000/todos')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(error => console.log('ERROR=>', error)); */
    axios
      .get('http://localhost:3000/todos')
      .then(({ data }) => this.setState({ todos: data }))
      .catch(error => console.log('ERROR =>', error));
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem(
        'todos',
        JSON.stringify(nextTodos),
      );
    }
  }

  addTodo = text => {
    const todo = {
      text,
      completed: false,
    };

    /*  todosApi.addTodo(todoData).then(todo => {
      this.setState(({ todos }) => ({
        todos: [...todos, todo],
      }));
      this.toggleModal();
    }); */

    axios
      .post('http://localhost:3000/todos', todo)
      .then(console.log);
    /*  this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    })); */

    this.toggleModal();
  };

  deleteTodo = todoId => {
    /* todosApi.deleteTodo(todoId).then(() => {
      this.setState(({ todos }) => ({
        todos: todos.filter(({ id }) => id !== todoId),
      }));
    }); */
  };

  toggleCompleted = todoId => {
    const todo = this.state.todos.find(
      ({ id }) => id === todoId,
    );
    const { completed } = todo;
    const update = { completed: !completed };

    /*  todosApi
      .updateTodo(todoId, update)
      .then(updatedTodo => {
        this.setState(({ todos }) => ({
          todos: todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo,
          ),
        }));
      }); */
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount =
      this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <div style={barStyles}>
          <Filter
            value={filter}
            onChange={this.changeFilter}
          />
          <Stats
            total={totalTodoCount}
            completed={completedTodoCount}
          />
          <IconButton
            onClick={this.toggleModal}
            aria-label="Добавить todo"
          >
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>
        </div>

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
      </Container>
    );
  }
}

export default TodosView;
