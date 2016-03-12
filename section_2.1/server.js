import 'babel-polyfill';

import koa from 'koa';

import mongoose from 'mongoose';
import User from '../models/user';

const app = new koa();

mongoose.connect('mongodb://127.0.0.1:27017/koa2');

app.use(async (ctx) => {
  ctx.body = "Hello Koa!";
});

app.listen(3000);
