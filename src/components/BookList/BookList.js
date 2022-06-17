import React from 'react';
/* import { Link, withRouter } from 'react-router-dom'; */
import { Link } from 'react-router-dom';
/* withRouter => component (function) of highest level
It wrappes component BookList in our case and gives thrugh props: histy, location, match */
import './BookList.scss';

import BookPreview from '../BookPreview/BookPreview';

// Bad practice  <BookPreview {...book} />
/*  <ul className="BookList">
      {books.map(book => (
        <li key={book.id}>
          <Link to={`${match.url}/${book.id}`}>
            <BookPreview imgUrl={book.imgUrl} title={book.title} />
          </Link>
        </li>
      ))}
    </ul> */

/* const BookList = ({ books, match }) => {
  return (
    <ul className="BookList">
      {books.map(({ id, imgUrl, title }) => (
        <li key={id}>
          <Link to={`${match.url}/${id}`}>
            <BookPreview imgUrl={imgUrl} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(BookList); */

const BookList = ({ books }) => {
  return (
    <ul className="BookList">
      {books.map(({ id, imgUrl, title }) => (
        <li key={id}>
          <Link to={`/books/${id}`}>
            <BookPreview imgUrl={imgUrl} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
