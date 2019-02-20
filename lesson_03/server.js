const koa = require('koa');
const app = new koa();

app.use(ctx => {
    if(ctx.method === 'POST'){

    }
})

app.listen(3000,()=>{
    console.log('server has started at port 3000');
})
