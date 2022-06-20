import React from 'react';
/* import { Link, withRouter } from 'react-router-dom'; */
import { Link, withRouter } from 'react-router-dom';
/* withRouter => component of highest level (function composition)
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

/* const BookList = ({ books }) => {
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
}; */

/* const BookList = ({ books }) => {
  return (
    <ul className="BookList">
      {books.map(({ id, imgUrl, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/books/${id}`,
            }}
          >
            <BookPreview imgUrl={imgUrl} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
}; */

//in location we recieve all previos data, like hash, key, pathname etc.
//to get previous pathname where we came from

const BookList = ({ books, location }) => {
  return (
    <ul className="BookList">
      {books.map(({ id, imgUrl, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/books/${id}`,
              state: { from: location },
            }}
          >
            <BookPreview imgUrl={imgUrl} title={title} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(BookList);
