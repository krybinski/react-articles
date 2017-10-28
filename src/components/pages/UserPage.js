import React, { Component } from 'react';

import ArticlesList from './../lists/ArticlesList';

import { GetUser } from './../../services/UsersService';
import { GetUserArticles } from './../../services/ArticlesService';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      articlesList: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    GetUser(id)
      .then(res => {
        this.setState({ user: res.data });

        GetUserArticles(id)
          .then(res => {
            this.setState({ articlesList: res.data });
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error));
  }

  render() {
    const user = this.state.user;
    const articlesList = this.state.articlesList;

    return (
      <div>
        <h1>{user.name}</h1>
        <p><strong>Username: </strong> {user.username}</p>
        <p><strong>Email: </strong> {user.email}</p>
        <p><strong>Phone: </strong> {user.phone}</p>
        <p><strong>Website: </strong> {user.website}</p>

        <div className="list-2">
          <h3>My articles:</h3>
          <ArticlesList articles={articlesList} />
        </div>
      </div>
    );
  }
}

export default UserPage;
