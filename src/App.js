import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/general/Nav';
import HomePage from './components/pages/HomePage';
import ArticlesPage from './components/pages/ArticlesPage';
import ArticlePage from './components/pages/ArticlePage';
import UsersPage from './components/pages/UsersPage';
import UserPage from './components/pages/UserPage';

import './App.css';

const App = () => (
  <div>
    <Nav />
    <div className="content-wrapper">
      <Route path="/" exact component={HomePage} />
      <Route path="/articles" exact component={ArticlesPage} />
      <Route path="/articles/:id" component={ArticlePage} />
      <Route path="/users" exact component={UsersPage} />
      <Route path="/users/:id" component={UserPage} />
    </div>
  </div>
);

export default App;
