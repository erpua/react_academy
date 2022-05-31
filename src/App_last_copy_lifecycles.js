//Modules
import React, { Component } from 'react';

//Components
import Container from './components/Container';
/*
import ColorPicker from './components/ColorPicker';
import Form from './components/Form';*/
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEditor';
import Filter from './components/Filter';
import Modal from './components/Modal/Modal';
/* import Clock from './components/Clock'; */
/* import Tabs from './components/Tabs';
import tabs from './tabs.json'; */
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';

//JSON
/* SHORT HAND PROPERTY import todos from './todos.json'; */
/* import initialTodos from './todos.json'; */

//ID__GENERATOR
import shortid from 'shortid';

class App extends Component {
  //PROPS

  //STATE
  /*   state = {
    todos: initialTodos,
    inputValue: '',
    filter: '',
  }; */

  state = {
    todos: [],
    inputValue: '',
    filter: '',
    showModal: false,
  };

  //Life cycles: DO NT MAKE ARROW FUNCTION
  componentDidMount() {
    /*   console.log('componentDidMount'); */

    const todos = localStorage.getItem('todos');

    /*   console.log(
      'todos from componentDidMount localStorage =>',
      todos,
    ); */

    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      /*  this.setState({ todos: parsedTodos }); */
      setTimeout(() => {
        this.setState({ todos: parsedTodos });
      }, 2000);
      console.log('parsedTodos=>', parsedTodos);
    }

    /*  setTimeout(() => {
      this.setState({ todos: parsedTodos });
    }, 2000); */
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('Component Did Update');
    //console.log('prevState BEFORE update=>', prevState);

    //console.log('this.state AFTER update => ', this.state);

    /*  if (prevState.todos !== this.state.todos) {
      // console.log(' STATE was updated '); 

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
    } */

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      // console.log(' STATE was updated ');

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
    /*  this.setState(state => ({
      showModal: !state.showModal,
    })); */
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addTodo = text => {
    /*  console.log('text fom addTodo / App.js=>', text); */

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

    /*  this.toggleModal(); */
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
    /* console.log('data(this.state), from App.js SYNC', data); */

    setTimeout(() => {
      console.log(
        'data(this.state), from App.js A_SYNC',
        data,
      );
    }, 1000);
  };

  toggleCompleted = todoId => {
    /*     console.log('todoId=> ', todoId); */

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

  //in REACT onChange combines onInput and onBlur (onFocus)
  //MARKUP
  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount =
      this.calculateCompletedTodos();
    /*   const normalizedFilter =
      this.state.filter.toLowerCase();
    const visibleTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    ); */
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        {/*  <AddIcon width="40" height="40" fill="teal" /> */}
        {/*  <IconButton onClick={this.toggleModal}>
          Open Modal
        </IconButton> */}

        {/*  aria-label is attribute of access. //in this case
        button does not have it's own content, //we pass
        content from another component => aria-label helps
        with accessability //for buttons and icons is MUST
        HAVE */}
        <IconButton
          onClick={this.toggleModal}
          aria-label="Add Todo"
        >
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {/*  <Tabs items={tabs} /> */}
        {/*  <Clock /> */}
        {/*  <h1>React Academy / L_4 / Forms</h1> */}
        {/*  {showModal && <Clock />}
        <button type="button" onClick={this.toggleModal}>
          Open / Close Clock
        </button> */}
        {/*  <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button> */}
        <hr />
        {/*  <h2>Modal component</h2>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>
              Hello, this is Modal content as children
            </h1>
            <p>
              lorem ipsum yada yada yada lorem ipsum yada
              yada yada lorem ipsum yada yada yada lorem
              ipsum yada yada yada lorem ipsum yada yada
              yada lorem ipsum yada yada yada lorem ipsum
              yada yada yada lorem ipsum yada yada yada
            </p>
            <button
              type="button"
              onClick={this.toggleModal}
            >
              Close modal
            </button>
          </Modal>
        )} */}
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
        {/*      <TodoEditor onSubmit={this.addTodo} /> */}
        <hr />
        <h2>Filter component</h2>
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
        {/* <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />  */}
        {/*   <hr /> */}
        {/*  <ColorPicker
          options={[
            { label: 'red', color: '#F44336' },
            { label: 'green', color: '#4CAF50' },
            { label: 'blue', color: '#2196F3' },
            { label: 'grey', color: '#607D8B' },
            { label: 'pink', color: '#E91E63' },
            { label: 'indigo', color: '#3F51B5' },
          ]}
        /> */}
        {/*  <hr /> */}
        {/* onSubimt in this case it.s a property */}
        {/*  <Form onSubmit={this.formSubmitHandler} /> */}
        {/*    <Form onSubmit={this.formSubmitHandler} /> */}
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
