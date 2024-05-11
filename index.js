const Koa = require('koa');
const {koaBody} = require('koa-body')
const router = require("./router")
const app = new Koa();


app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000,()=> console.log('server started....'));