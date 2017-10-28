import axios from 'axios';

import API from './APIService';

export const GetArticles = () => {
  const url = `${API}/posts`;
  return axios.get(url);
};

export const GetArticle = (id) => {
  const url = `${API}/posts/${id}`;
  return axios.get(url);
};

export const GetUserArticles = (id) => {
  const url = `${API}/posts?userId=${id}`;
  return axios.get(url);
}
