import axios from 'axios';

import API from './APIService';

export const GetUsers = () => {
  const url = `${API}/users`;
  return axios.get(url);
}

export const GetUser = (id) => {
  const url = `${API}/users/${id}`;
  return axios.get(url);
}

export const GetUserArticles = (id) => {
  const url = `${API}/users/${id}/posts`;
  return axios.get(url);
}
