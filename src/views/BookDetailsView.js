import React, { Component } from 'react';
import axios from 'axios';

class BookDetailsView extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const response = await axios.get(
      `http://localhost:4040/books/${bookId}`,
    );
    console.log('response.data =>', response.data);

    /*  this.setState({ book: response.data }); */
    this.setState({ ...response.data });
  }

  render() {
    return (
      <>
        <h1>
          Book page
          {this.props.match.params.bookId}
        </h1>

        <img src={this.state.imgUrl} alt="Front book" />
        <h2>{this.state.title}</h2>
        <p>{this.state.descr}</p>
      </>
    );
  }
}

export default BookDetailsView;
