import Router from 'koa-router';
import posts from './posts/index.js';
import auth from './auth/index.js';
import about from './about/index.js';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());
api.use('/about', about.routes());

export default api;