import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ArticlesPage from './components/pages/ArticlesPage';

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/articles" exact component={ArticlesPage} />
  </div>
);

export default App;
