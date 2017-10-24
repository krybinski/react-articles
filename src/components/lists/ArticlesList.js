import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticlesList extends Component {
  render() {
    return (
      <div>
        <h2>Articles list</h2>
        <ul>
          {this.props.articles.map(item => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired
}

export default ArticlesList;
