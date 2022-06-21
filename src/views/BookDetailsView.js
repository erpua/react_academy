import React, { Component } from 'react';
import axios from 'axios';
import routes from '../routes';

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
    /*   console.log('response.data =>', response.data); */

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

  handleGoBack = () => {
    const { location, history } = this.props;
    /*
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.books); */

    //Optional chaining operator
    history.push(location?.state?.from || routes.books);
  };

  render() {
    const { imgUrl, title, author, descr } = this.state;

    /*    console.log('location =>', location); */

    /*    console.log('location.state.from =>', location.state.from); */

    return (
      <div className="container-fluid">
        {/*  <h1>
          Book page
          {this.props.match.params.bookId}
        </h1> */}
        {/*  <button type="button" onClick={() => this.props.history.push('/books')}>
          Go back
        </button> */}
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>

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
      </div>
    );
  }
}

export default BookDetailsView;
