import React, { Component } from 'react';
import Loader from 'react-loader';

import UsersList from './../lists/UsersList';

import { GetUsers } from './../../services/UsersService';

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      usersList: []
    };
  }

  componentDidMount() {
    GetUsers()
      .then(res => {
        this.setState({
          loader: true,
          usersList: res.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const loaded = this.state.loader;
    const usersList = this.state.usersList;

    return (
      <Loader loaded={loaded}>
        <div>
          <h1>Users list</h1>
          <UsersList users={usersList} />
        </div>
      </Loader>
    );
  }
}

export default UsersPage;
