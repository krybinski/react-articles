import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './articlesList.css';

class ArticlesList extends Component {
  render() {
    return (
      <div>
        <ul className="articles-list">
          {this.props.articles.map(item => {
            return <li key={item.id} className="article-item">
              <Link to={'/articles/' + item.id}>{item.title}</Link>
            </li>
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
