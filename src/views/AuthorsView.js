import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import AuthorBooks from '../components/AuthorBooks';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'http://localhost:4040/authors?_embed=books',
    );
    console.log('RESPONSE from books end point', response);
    this.setState({ authors: response.data });
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <h1>Authors Page</h1>

        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${match.url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
        {/*  <Route
          path="/authors/:authorId"
          render={() => <h1>Inner Router</h1>}
        /> */}
        {/*  <Route
          path={`${match.path}/:authorId`}
          render={() => <h1>Inner Router</h1>}
        /> */}
        {/* render={props => ...} => Router props: history, location, match */}
        {/*
        {this.state.authors.length > 0 && (
          <Route
            path={`${match.path}/:authorId`}
            render={props => {
              console.log('PROPS =>', props);
              const bookId = Number(
                props.match.params.authorId,
              );
              console.log('bookId =>', bookId);
              const author = this.state.authors.find(
                ({ id }) => id === bookId,
              );
              console.log('author =>', author);
              console.log('author.books =>', author.books);

              return (
                <AuthorBooks
                  {...props}
                  authors={this.state.authors}
                />
              );
            }}
          />
        )} */}

        {/* Do NOT work if we show Route before asigning books to state */}

        <Route
          path={`${match.path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);
            const author = this.state.authors.find(({ id }) => id === bookId);

            if (author) {
              console.log('author =>', author);
              console.log('author.books =>', author.books);
            }

            return author && <AuthorBooks {...props} books={author.books} />;
          }}
        />
      </>
    );
  }
}

export default AuthorsView;
