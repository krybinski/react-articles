import React, { Component } from 'react';
import Loader from 'react-loader';

import ArticlesList from './../lists/ArticlesList';

import { GetUser } from './../../services/UsersService';
import { GetUserArticles } from './../../services/UsersService';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
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
            this.setState({
              loader: true,
              articlesList: res.data
            });
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log(error));
  }

  render() {
    const loaded = this.state.loader;
    const user = this.state.user;
    const articlesList = this.state.articlesList;

    return (
      <Loader loaded={loaded}>
        <div>
          <h1>{user.name}</h1>
          <p><strong>Username: </strong> {user.username}</p>
          <p><strong>Email: </strong> {user.email}</p>
          <p><strong>Phone: </strong> {user.phone}</p>
          <p><strong>Website: </strong> {user.website}</p>

          <div className="mt50">
            <h3>My articles:</h3>
            <ArticlesList articles={articlesList} />
          </div>
        </div>
      </Loader>
    );
  }
}

export default UserPage;
