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
import todosOperations from '../redux/todos/todos-operations';
import todosSelectors from '../redux/todos/todos-selectors';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosView extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <div style={barStyles}>
          <Filter />
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Add todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>
          {this.props.isLoadingTodos && <h1>Downloading...</h1>}
        </div>

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
  isLoadingTodos: todosSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosOperations.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
