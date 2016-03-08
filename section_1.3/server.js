import 'babel-polyfill';

import koa from 'koa';

const app = new koa();

app.use(async (ctx) => {
  ctx.body = "Hello Koa!";
});

app.listen(3000);
