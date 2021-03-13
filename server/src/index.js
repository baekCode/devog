import dotenv from 'dotenv';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api/index.js';

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

// use : app router
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('Listening to port : %d', port);
});