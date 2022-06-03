import React from 'react';
/*  Filter by name: <input type="text" value={this.state.filter}/> */

const Filter = ({ value, onChange }) => (
  <label>
    Filter by name:
    <input type="text" value={value} onChange={onChange} />
  </label>
);

/* const Filter = ({ value, onChange }) => {
  return (
    <label>
      Filter by name:
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}; */

export default Filter;
