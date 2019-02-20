const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    if(ctx.url === '/index'){
        ctx.cookies.set('name','wu');
        ctx.body = 'cookie is ok';
    }else{
        ctx.body = 'hello';
        ctx.body =  ctx.cookies.get('name');
    }
})

app.listen(3000,()=>{
    console.log('server has started at port 3000');
});
