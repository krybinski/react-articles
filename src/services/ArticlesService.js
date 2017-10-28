import axios from 'axios';

export const GetArticles = () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;

  return axios.get(url);
};

export const GetArticle = (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  return axios.get(url);
};
