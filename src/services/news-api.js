import React from 'react';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer 299c46f2879340a98a8a92d3f1ecce28';

const fetchAricles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
}) => {
  /* return axios.get(
    `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
  ); */
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
    )
    .then(response => response.data.articles);
};

export default { fetchAricles };
