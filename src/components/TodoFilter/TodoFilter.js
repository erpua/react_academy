import React from 'react';
import { connect } from 'react-redux';
import './TodoFilter.scss';

const Filter = ({ value, onChange }) => (
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

const mapStateToProps = state => ({
  value: state.todos.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange:
});

export default connect()(Filter);
