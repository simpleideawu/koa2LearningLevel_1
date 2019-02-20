const Koa = require('koa');
const Static = require('koa-static');
const path = require('path');

const app = new Koa();

const staticPath = './static';

app.use(Static(
    path.join( __dirname,  staticPath)
));

app.listen(3000, () => {
    console.log('[demo] static-use-middleware is starting at port 3000')
});
