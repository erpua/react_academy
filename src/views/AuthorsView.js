import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
/* import AuthorBooks from '../components/AuthorBooks'; */
import BookList from '../components/BookList';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'http://localhost:4040/authors?_embed=books',
    );
    this.setState({ authors: response.data });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="container-fluid">
        <h1>Authors Page</h1>

        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${match.url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>

        <Route
          path={`${match.path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);
            const author = this.state.authors.find(({ id }) => id === bookId);

            return (
              author && (
                <>
                  <h2>Books of {author.name}</h2>
                  {/*  <AuthorBooks {...props} books={author.books} /> */}
                  <BookList {...props} books={author.books} />
                </>
              )
            );
          }}
        />
      </div>
    );
  }
}

/*  if (author) {
   console.log('author =>', author);
   console.log('author.books =>', author.books);
 } */

export default AuthorsView;
