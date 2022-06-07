import React, { Component } from 'react';
import newsApi from '../services/news-api';
import SearchForm from '../components/SearchForm';

class ArticlesView extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
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
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div>
        <br />
        <SearchForm onSubmit={this.onChangeQuery} />
        {/*  <ul>
          {articles.map(article => (
            <li key={article.title}></li>
          ))}
        </ul> */}

        {isLoading && <h1>Downloading ...</h1>}

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

        {articles.length > 0 && (
          <button type="button" onClick={this.fetchAticles}>
            Download more
          </button>
        )}
      </div>
    );
  }
}

export default ArticlesView;
