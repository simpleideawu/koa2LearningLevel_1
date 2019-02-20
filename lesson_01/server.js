const koa = require('koa')

const app = new koa();

app.use(ctx => {
    ctx.body='hello';
})

app.listen(3000,()=>{
    console.log('server has started at port 3000');
})