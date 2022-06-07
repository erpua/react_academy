import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from '../components/SearchForm';

axios.defaults.headers.common['Authorization'] =
  'Bearer 299c46f2879340a98a8a92d3f1ecce28';

class ArticlesView extends Component {
  state = {
    articles: [],
  };

  onChangeQuery = query => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-05-07&sortBy=${query}`,
      )
      .then(response =>
        this.setState({
          articles: response.data.articles,
        }),
      );
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>Articles</h1>
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
      </div>
    );
  }
}

export default ArticlesView;
