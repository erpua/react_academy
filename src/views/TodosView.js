import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import Filter from '../components/TodoFilter';
import Stats from '../components/Stats';
import TodoEditor from '../components/TodoEditor';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

import { todosOperations, todosSelectors } from '../redux/todos';
import Modal from '../components/Modal/Modal';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

/* const mapStateToProps = state => ({
  isLoadingTodos: todosSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosOperations.fetchTodos()),
  fetchTodosAsync: () => dispatch(todosOperations.fetchTodosAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosView); */

export default function TodosView() {
  // state = {
  //   showModal: false,
  // };
  const dispatch = useDispatch();
  const isLoadingTodos = useSelector(todosSelectors.getLoading);
  const [showModal, setShowModal] = useState(false);

  // componentDidMount() {
  //  /*  this.props.fetchTodosAsync; */
    
  // /*   this.props.fetchTodos(); */
  // }

  useEffect(() => {
    dispatch(todosOperations.fetchTodos());
  }, [dispatch]);

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  // const toggleModal = () => {
  //   setShowModal(prevShowModal => !prevShowModal);
  // };

  //memoize function toggleModal();
  const toggleModal = useCallback(
    () => {
    setShowModal(prevShowModal => !prevShowModal);
  }, [] );

  // const { showModal } = this.state;

  return (
    <Container>
      <div style={barStyles}>
        <Filter />
        <Stats />
        <IconButton 
          onClick={toggleModal} 
          aria-label="Add todo"
        >
          <AddIcon 
            width="40" 
            height="40" 
            fill="#fff" 
          />
        </IconButton>

        {isLoadingTodos && <h1>Downloading...</h1>}
          
      </div>

       <TodoList />

      {showModal && (
        <Modal onClose={toggleModal}>
          <TodoEditor onSave={toggleModal} />
        </Modal>
      )}
    </Container>
  );

};

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Container from '../components/Container';
// import TodoList from '../components/TodoList';
// import Filter from '../components/TodoFilter';
// import Stats from '../components/Stats';
// import TodoEditor from '../components/TodoEditor';
// import Modal from '../components/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';

// import { todosOperations, todosSelectors } from '../redux/todos';

// const barStyles = {
//   display: 'flex',
//   alignItems: 'flex-end',
//   marginBottom: 20,
// };

// class TodosView extends Component {
//   state = {
//     showModal: false,
//   };

//   componentDidMount() {
//    /*  this.props.fetchTodosAsync; */
    
//   /*   this.props.fetchTodos(); */
//   }

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { showModal } = this.state;

//     return (
//       <Container>
//         <div style={barStyles}>
//           <Filter />
//           <Stats />
//           <IconButton 
//             onClick={this.toggleModal} 
//             aria-label="Add todo"
//           >
//             <AddIcon 
//               width="40" 
//               height="40" 
//               fill="#fff" 
//             />
//           </IconButton>

//           {this.props.isLoadingTodos && <h1>Downloading...</h1>}
          
//         </div>

//         <TodoList />

//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <TodoEditor onSave={this.toggleModal} />
//           </Modal>
//         )}
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoadingTodos: todosSelectors.getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchTodos: () => dispatch(todosOperations.fetchTodos()),
//   fetchTodosAsync: () => dispatch(todosOperations.fetchTodosAsync()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodosView);