import client from './client';

export const writeAbout = ({title, body}) => client.post('/api/about', {title, body});
export const getAbout = () => client.get(`/api/about/`);
export const updateAbout = ({title, body}) => client.patch(`/api/about/`, {title, body});
export const removeAbout = () => client.delete(`/api/about/`);
