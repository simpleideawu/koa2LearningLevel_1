const koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new koa();
app.use(bodyParser());

app.use(async (ctx) => {
    // the parsed body will store in ctx.request.body
    // if nothing was parsed, body will be an empty object {}
    ctx.body = ctx.request.body;
});


app.listen(3000,()=>{
    console.log('server has started at port 3000');
})


