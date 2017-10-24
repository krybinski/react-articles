import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ArticlesList from './../lists/ArticlesList';

class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.state = { articlesList: [] };
  }

  getArticles = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    axios.get(url)
      .then(res => {
        this.setState({ articlesList: res.data });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getArticles();
  }

  render() {
    return (
      <div>
        <h1>Articles page</h1>
        <Link to="/">Home</Link>
        <ArticlesList articles={this.state.articlesList} />
      </div>
    )
  }
}

export default ArticlesPage;
