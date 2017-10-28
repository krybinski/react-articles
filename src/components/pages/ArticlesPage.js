import React, { Component } from 'react';

import ArticlesList from './../lists/ArticlesList';

import { GetArticles } from './../../services/ArticlesService';

class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesList: []
    };
  }

  componentDidMount() {
    GetArticles()
      .then(res => {
        this.setState({ articlesList: res.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    const articlesList = this.state.articlesList;

    return (
      <div>
        <h1>Articles list</h1>
        <ArticlesList articles={articlesList} />
      </div>
    );
  }
}

export default ArticlesPage;
