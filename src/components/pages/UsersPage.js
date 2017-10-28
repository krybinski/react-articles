import React, { Component } from 'react';

import UsersList from './../lists/UsersList';

import { GetUsers } from './../../services/UsersService';

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: []
    };
  }

  componentDidMount() {
    GetUsers()
      .then(res => {
        this.setState({ usersList: res.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    const usersList = this.state.usersList;

    return (
      <div>
        <h1>Users list</h1>
        <UsersList users={usersList} />
      </div>
    );
  }
}

export default UsersPage;
