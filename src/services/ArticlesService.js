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

export const GetArticleComments = (id) => {
  const url = `${API}/posts/${id}/comments`;
  return axios.get(url);
}
