import React, { Component } from 'react';
import axios from 'axios';

//299c46f2879340a98a8a92d3f1ecce28

//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

//https://newsapi.org/v2/everything?q=tesla&from=2022-05-07&sortBy=publishedAt&apiKey=299c46f2879340a98a8a92d3f1ecce28
class ArticlesView extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    /*  axios
      .get(
        'https://newsapi.org/v2/everything?q=tesla&from=2022-05-07&sortBy=publishedAt&apiKey=299c46f2879340a98a8a92d3f1ecce28',
      )
      .then(console.log); */

    /*   axios
      .get(
        'https://newsapi.org/v2/everything?q=tesla&from=2022-05-07&sortBy=react&apiKey=299c46f2879340a98a8a92d3f1ecce28',
      )
      .then(response =>
        console.log('ARTICLES => ', response.data.articles),
      ); */

    axios
      .get(
        'https://newsapi.org/v2/everything?q=tesla&from=2022-05-07&sortBy=react&apiKey=299c46f2879340a98a8a92d3f1ecce28',
      )
      .then(response =>
        this.setState({ articles: response.data.articles }),
      );

    //Example
    axios
      .get(
        'https://newsapi.org/v2/everything?q=tesla&from=2022-05-07&sortBy=react',
      )
      .then(response =>
        this.setState({
          articles: response.data.articles,
        }),
      );
  }

  onChangeQuery = query => {
    const { currentPage } = this.state;

    /*  axios
      .get(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=5&page=${currentPage}`,
      )
      .then(response =>
        this.setState({
          articles: response.data.articles,
        }),
      ); */

    axios
      .get(
        `https://newsapi.org/v2/everything?q=${query}&pageSize=5&page=${currentPage}`,
      )
      .then(response =>
        this.setState(prevState => ({
          articles: response.data.articles,
          currentPage: prevState.currentPage + 1,
        })),
      );
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h1>Articles</h1>
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
