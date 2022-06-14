/* import React, { Component } from 'react'; */

/* class AuthorBooks extends Component { */
/*   state = {
    books: [],
  }; */

/*  componentDidMount() {
    console.log('componentDidMount');

    console.log(
      'Number(this.props.match.params.authorId) =>',
      Number(this.props.match.params.authorId),
    );

    console.log(
      'this.props.authors =>',
      this.props.authors,
    );
  } */

/*  componentDidMount() {
    const id = Number(this.props.match.params.authorId);
    const author = this.props.authors.find(
      author => author.id === id,
    );

    console.log('author:', author);

    const { books } = this.props.authors.find(
      author => author.id === id,
    );

    console.log('author books:', books);
    this.setState({ books });
  } */

/*   componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');

    console.log(
      'Number(this.props.match.params.authorId) =>',
      Number(this.props.match.params.authorId),
    );

    console.log(
      'this.props.authors =>',
      this.props.authors,
    );
  } */

/*  render() {
    return (
      <>
        <h1>Author book Component</h1>
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </>
    );
  } */
/*  render() {
    return (
      <>
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </>
    );
  }
} */

import React from 'react';
import { Link } from 'react-router-dom';

const AuthorBooks = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default AuthorBooks;
