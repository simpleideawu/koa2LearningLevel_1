const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');

module.exports = app => {
    app.use(bodyParser());
    app.use(session({
        key:'session-id',
        cookie:{
            domain:'localhost',
            path:'/',
            maxAge:1000*30,
            httpOnly: true,
            overwrite: false
        }
    }));
}
