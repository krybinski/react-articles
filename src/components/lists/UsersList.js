import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './list.css';

class UsersList extends Component {
  render() {
    return (
      <div>
        <ul className="list">
          {this.props.users.map(item => {
            return <li key={item.id} className="list-item">
              <Link to={'/users/' + item.id}>{item.name}</Link>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UsersList;
