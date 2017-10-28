import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader';

import CommentsList from './../lists/CommentsList';

import { GetArticle } from './../../services/ArticlesService';
import { GetArticleComments } from './../../services/ArticlesService';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      article: {},
      commentsList: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.all([GetArticle(id), GetArticleComments(id)])
      .then(axios.spread((article, comments) => {
        this.setState({
          loader: true,
          article: article.data,
          commentsList: comments.data
        });
      }))
      .catch(error => console.log(error));
  }

  render() {
    const loaded = this.state.loader;
    const article = this.state.article;
    const commentsList = this.state.commentsList;

    return (
      <Loader loaded={loaded}>
        <div>
          <h1>{article.title}</h1>
          <p>{article.body}</p>

          <div className="mt50">
            <h3>Comments:</h3>
            <CommentsList comments={commentsList} />
          </div>
        </div>
      </Loader>
    );
  }
}

export default ArticlePage;
