// import React from 'react';
// import './TodoFilter.scss';
// import { connect } from 'react-redux';

// import { todosSelectors, changeFilter } from '../../redux/todos';

// /* import * as todosActions from '../../redux/todos/todos-actions';
// import todosSelectors from '../../redux/todos/todos-selectors'; */

// const Filter = ({ value, onChange }) => (
//   <div className="TodoFilter">
//     <p className="TodoFilter__label">Filter by content</p>
//     <input
//       type="text"
//       className="TodoFilter__input"
//       value={value}
//       onChange={onChange}
//     ></input>
//   </div>
// );

// const mapStateToProps = state => ({
//   value: todosSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

import React, { useCallback } from 'react';
import './TodoFilter.scss';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelectors, changeFilter } from '../../redux/todos';

/* const mapStateToProps = state => ({
  value: todosSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter); */

export default function Filter () {
  const value = useSelector(todosSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = useCallback(
    (event) => {
      dispatch(changeFilter(event.target.value))
    }, [dispatch] );

  return (
    <div className="TodoFilter">
      <p className="TodoFilter__label">Filter by content</p>
      <input
        type="text"
        className="TodoFilter__input"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
 
