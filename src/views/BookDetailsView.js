import React, { Component } from 'react';
import axios from 'axios';

class BookDetailsView extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const response = await axios.get(
      `http://localhost:4040/books/${bookId}?_expand=author`,
    );
    console.log('response.data =>', response.data);

    /*  this.setState({ book: response.data }); */
    this.setState({ ...response.data });
  }

  /*  render() {
    return (
      <>
        <h1>
          Book page
          {this.props.match.params.bookId}
        </h1>

        <img src={this.state.imgUrl} alt="Front book" />
        <h2>{this.state.title}</h2>
        {this.state.author && (
          <p>
            <i>
              <b>Author:&#32;</b>
            </i>
            {this.state.author.name}
          </p>
        )}
        <p>{this.state.descr}</p>
      </>
    );
  } */
  render() {
    const { imgUrl, title, author, descr } = this.state;

    return (
      <>
        <h1>
          Book page
          {this.props.match.params.bookId}
        </h1>

        <img src={imgUrl} alt="Front book" />
        <h2>{title}</h2>
        {author && (
          <p>
            <i>
              <b>Author:&#32;</b>
            </i>
            {this.state.author.name}
          </p>
        )}
        <p>{descr}</p>
      </>
    );
  }
}

export default BookDetailsView;
