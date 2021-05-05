import dotenv from 'dotenv';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';
import api from './api/index.js';
import jwtMiddleware from './lib/jwtMiddleware.js';

dotenv.config();

const {PORT, MONGO_URI} = process.env;

mongoose
  .connect(MONGO_URI, {useNewUrlParser: true, useFindAndModify: false})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
  });


const app = new Koa();
const router = new Router();
const port = PORT || 4000;

// 라우터 설정
router.use('/api', api.routes());

// 라우터 적용 전에 bodyparser 적용
app.use(bodyParser());
app.use(jwtMiddleware);

// use : app router
app.use(router.routes()).use(router.allowedMethods());

const __dirname = path.resolve();
const buildDirectory = path.resolve(__dirname, '../client/build');
app.use(serve(buildDirectory));
app.use(async ctx => {
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    await send(ctx, 'index.html', {root: buildDirectory});
  }
});

app.listen(port, () => {
  console.log('Listening to port : %d', port);
});