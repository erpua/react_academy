import React, { useState } from 'react';

export default function NewsSearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={query} 
        onChange={handleChange} 
        />
      <button type="submit">Search</button>
    </form>
  );
} 

/* import React, { Component } from "react";

class NewsSearchForm extends Component {
  state= {
    query: ''
  };

  handleCahnge = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({query: ''});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.query} 
          onChange={this.handleChange} 
        />
        <button 
          type="submit">
            Search
        </button>
    </form>
    )
  }

}

export default NewsSearchForm; */