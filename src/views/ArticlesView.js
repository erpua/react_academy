import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';

axios.defaults.headers.common['Authorization'] =
  'Bearer 299c46f2879340a98a8a92d3f1ecce28';

class ArticlesView extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
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

    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=5&page=${currentPage}`,
      )
      .then(response =>
        this.setState(prevState => ({
          articles: [
            ...prevState.articles,
            ...response.data.articles,
          ],
          currentPage: prevState.currentPage + 1,
        })),
      );
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <br />
        <SearchForm onSubmit={this.onChangeQuery} />
        {/*  <ul>
          {articles.map(article => (
            <li key={article.title}></li>
          ))}
        </ul> */}
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

        <button type="button" onClick={this.fetchAticles}>
          Download more
        </button>
      </div>
    );
  }
}

export default ArticlesView;
