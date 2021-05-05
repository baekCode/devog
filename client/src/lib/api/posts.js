import qs from 'qs';
import client from './client';

export const writePost = ({title, body, tags}) => client.post('/api/posts', {title, body, tags});
export const getPosts = ({tag, username, page}) => {
  const queryString = qs.stringify({tag, username, page});
  return client.get(`/api/posts?${queryString}`);
};
export const getPost = id => client.get(`/api/posts/${id}`);
export const updatePost = ({id, title, body, tags}) => client.patch(`/api/posts/${id}`, {title, body, tags});
export const removePost = id => client.delete(`/api/posts/${id}`);
