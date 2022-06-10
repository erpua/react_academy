import React, { Component } from 'react';
import axios from 'axios';

class AuthorsView extends Component {
  state = { authors: [] };

  async componentDidMount() {
    const response = await axios.get(
      'http://localhost:4040/authors',
    );
    console.log('RESPONSE from books end point', response);
    this.setState({ authors: response.data });
  }

  render() {
    return (
      <>
        <h1>Authors</h1>

        <ul>
          {this.state.authors.map(author => (
            <li key={author.id}>{author.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default AuthorsView;
