const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


let home = new Router();

home.get('/wu',(ctx,next) => {
    ctx.body = 'home wu';
})
    .get('/jade',(ctx,next)=>{
        ctx.body = 'home jade';
    });

let work = new Router();

work.get('/wu',(ctx,next) => {
    ctx.body = 'work wu';
})
    .get('/jade',(ctx,next)=>{
        ctx.body = 'work jade';
    });


router.use('/home',home.routes(),home.allowedMethods());
router.use('/work',work.routes(),work.allowedMethods());

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('server has started at port 3000');
})
