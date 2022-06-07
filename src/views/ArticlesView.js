import React, { Component } from 'react';
import newsApi from '../services/news-api';
import SearchForm from '../components/SearchForm';

class ArticlesView extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  /*  onChangeQuery = query => {
    //!setState is ASYNC => this.fetchAricles will go first without query
    this.setState({ searchQuery: query });
    this.fetchAticles();
  };
 */

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchAticles();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  fetchAticles = () => {
    const { currentPage, searchQuery } = this.state;

    //pattern "options" (configuration object) of sending params:
    //uses when in more than 2 params
    const options = {
      searchQuery,
      currentPage,
    };
    /*
    newsApi.fetchAricles(options).then(response =>
      this.setState(prevState => ({
        articles: [
          ...prevState.articles,
          ...response.data.articles,
        ],
        currentPage: prevState.currentPage + 1,
      })),
    ); */

    this.setState({ isLoading: true });

    newsApi
      .fetchAricles(options)
      .then(articles =>
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error: error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton =
      articles.length > 0 && !isLoading;

    return (
      <div>
        {error && <h1>Loading error ...</h1>}
        <br />
        <SearchForm onSubmit={this.onChangeQuery} />

        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>

        {isLoading && <h1>Downloading ...</h1>}

        {shouldRenderLoadMoreButton && (
          <button type="button" onClick={this.fetchAticles}>
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default ArticlesView;
