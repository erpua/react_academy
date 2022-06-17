import React, { Component } from 'react';

import axios from 'axios';
import BookList from '../components/BookList';

class BooksView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:4040/books');

    this.setState({ books: response.data });
  }

  render() {
    return (
      <>
        <div className="container-fluid"></div>
        <BookList books={this.state.books} />
      </>
    );
  }
}

export default BooksView;
