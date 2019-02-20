const koa = require('koa')

const app = new koa();

app.use(ctx => {
    let url = ctx.url;
    let req = ctx.request;
    // 从request中获取参数
    let req_query = req.query;
    let req_query_string = req.querystring;

       //从上下文中直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    ctx.body = {
        url,
        req_query,
        req_query_string,
        ctx_query,
        ctx_querystring
    }
})

app.listen(3000,()=>{
    console.log('server has started at port 3000');
})