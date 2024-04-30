const Koa = require('koa');
const { koaBody } = require("koa-body");
const bodyParser = require('koa-bodyparser');
const router = require("./router")
const json = require('koa-json')
const responseHandler = require('./handler/response');

const app = new Koa();

 app.use(json());
app.use(koaBody({ includeUnparsed: true}));
app.use(router.routes());
app.use(bodyParser());
app.use(responseHandler);
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=> console.log('server started....'));