import React, { Component } from 'react';
import axios from 'axios';

class BookDetailsView extends Component {
  state = {};

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const response = await axios.get(
      `http://localhost:4040/books/${bookId}`,
    );
    console.log('response.data =>', response.data);
  }

  render() {
    return (
      <h1>
        This is BookDetailsView component
        <span>&#32;</span>
        {this.props.match.params.bookId}
      </h1>
    );
  }
}

export default BookDetailsView;
