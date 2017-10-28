import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './List.css';

class ArticlesList extends Component {
  render() {
    return (
      <div>
        <ul className="list">
          {this.props.articles.map(item => {
            return <li key={item.id} className="list-item">
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
