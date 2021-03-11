const Router = require('koa-router');
const posts = new Router();
const postsCtrl = require('./posts.ctrl');

const printInfo = ctx => {
  const {method, path, params} = ctx;
  ctx.body = {
    method,
    path,
    params
  };
};

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.put('/:id', postsCtrl.replace);
posts.patch('/:id', postsCtrl.update);

module.exports = posts;