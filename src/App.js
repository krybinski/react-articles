import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/general/Nav';
import HomePage from './components/pages/HomePage';
import ArticlesPage from './components/pages/ArticlesPage';
import ArticlePage from './components/pages/ArticlePage';

import './app.css';

const App = () => (
  <div>
    <Nav />
    <div className="content-wrapper">
      <Route path="/" exact component={HomePage} />
      <Route path="/articles" exact component={ArticlesPage} />
      <Route path="/articles/:id" component={ArticlePage} />
    </div>
  </div>
);

export default App;
