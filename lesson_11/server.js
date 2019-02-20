const Koa = require('koa');
const app = new Koa();

require('./config')(app);
require('./route')(app);

app.listen(3000,()=>{
    console.log('server has started at port 3000');
});
