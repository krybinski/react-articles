import React, { Component } from 'react';

import { GetArticle } from './../../services/ArticlesService';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    GetArticle(id)
      .then(res => {
        this.setState({
          article: res.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    let article = this.state.article;

    return (
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
    );
  }
}

export default ArticlePage;
