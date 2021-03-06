import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import Filter from '../components/TodoFilter';
import Stats from '../components/Stats';
import TodoEditor from '../components/TodoEditor';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
/* import todosApi from '../services/todos-api'; */
import todosOperations from '../redux/todos/todos-operations';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosView extends Component {
  /*  state = {
    todos: [],
    filter: '',
    showModal: false,
  };
 */

  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  /*  componentDidMount() {
    todosApi
      .fetchTodos()
      .then(todos => this.setState({ todos }))
      .catch(error => console.log('ERROR =>', error));
  } */

  /*   componentDidMount() {
    todosApi.fetchTodos().then(todos => this.setState({ todos }));
  }
 */

  /*  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }
  } */

  /*  addTodo = text => {
    const todoData = {
      text,
      completed: false,
    };

    todosApi.addTodo(todoData).then(todo => {
      this.setState(({ todos }) => ({
        todos: [...todos, todo],
      }));
      this.toggleModal();
    });
  }; */

  /*   deleteTodo = todoId => {
    todosApi.deleteTodo(todoId).then(() => {
      this.setState(({ todos }) => ({
        todos: todos.filter(({ id }) => id !== todoId),
      }));
    });
  };
 */

  /*  toggleCompleted = todoId => {
    const todo = this.state.todos.find(({ id }) => id === todoId);

    const { completed } = todo;
    const update = { completed: !completed };

    todosApi.updateTodo(todoId, update).then(updatedToodo => {
      this.setState(({ todos }) => ({
        todos: todos.map(todo =>
          todo.id === updatedToodo.id ? updatedToodo : todo,
        ),
      }));
    });
  }; */

  /*  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  }; */

  /*  toggleCompleted = todoId => {
    const todo = this.state.todos.find(
      ({ id }) => id === todoId,
    );
    const { completed } = todo;
    const update = { completed: !completed };

      todosApi
      .updateTodo(todoId, update)
      .then(updatedTodo => {
        this.setState(({ todos }) => ({
          todos: todos.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo,
          ),
        }));
      });c
  }; */

  /*   changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }; */

  /*   getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  }; */

  /*   calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };*/

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    /*     const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos(); */

    return (
      <Container>
        <div style={barStyles}>
          {/* Filter automatically connects to redux and gets props/events */}
          <Filter />
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Add todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>
          {this.props.isLoadingTodos && <h1>Downloading...</h1>}
        </div>

        {/*  <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
        {/* now TodoList automatically will connect to redux and take what it needs */}
        {/* since TodoList has a TodoList.container.js => the continer is being rendered, and under the hood (pod kapotom) render of TodoList itself */}
        <TodoList />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTodos: state.todos.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosOperations.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
