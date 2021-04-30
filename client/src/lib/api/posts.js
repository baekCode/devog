import client from './client';

export const writePost = ({title, body, tags}) => client.post('/api/posts', {title, body, tags});
export const getPosts = () => client.get('/api/posts');
export const getPost = id => client.get(`/api/posts/${id}`);
