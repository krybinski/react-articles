import React, { Component } from 'react';
import Loader from 'react-loader';

import ArticlesList from './../lists/ArticlesList';

import { GetArticles } from './../../services/ArticlesService';

class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      articlesList: []
    };
  }

  componentDidMount() {
    GetArticles()
      .then(res => {
        this.setState({
          loader: true,
          articlesList: res.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const loaded = this.state.loader;
    const articlesList = this.state.articlesList;

    return (
      <Loader loaded={loaded}>
        <div>
          <h1>Articles list</h1>
          <ArticlesList articles={articlesList} />
        </div>
      </Loader>
    );
  }
}

export default ArticlesPage;
