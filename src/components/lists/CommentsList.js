import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './List.css';

class CommentsList extends Component {
  render() {
    return (
      <div>
        <ul className="list list_full">
          {this.props.comments.map(item => {
            return <li key={item.id} className="list-item list-item_border">
              <p><strong>{item.name}</strong></p>
              <p>{item.body}</p>
              <p><small>Author: <i>{item.email}</i></small></p>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentsList;
