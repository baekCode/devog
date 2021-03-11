const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const api = require('./api');

// 라우터 설정
router.use('/api', api.routes())

// use : app router
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port : 4000');
});