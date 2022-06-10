/* import React, { Component } from 'react';
import axios from 'axios';

class BooksView extends Component {
  state = { books: [] };

  async componentDidMount() {

       /*  {http://localhost:4040/books => end point }  */
/*
    const response = await axios.get(
      'http://localhost:4040/books',
    );
    console.log('response from books end point', response);
    this.setState({ books: response.data });
  }

  render() {
    return (
      <>
        <h1>Books</h1>

        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksView;
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BooksView extends Component {
  state = { books: [] };

  async componentDidMount() {
    const response = await axios.get(
      'http://localhost:4040/books',
    );
    console.log('response from books end point', response);
    this.setState({ books: response.data });
  }

  render() {
    return (
      <>
        <h1>Books</h1>

        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksView;
