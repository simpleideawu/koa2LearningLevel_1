const path = require('path');
const Koa = require('koa');
const convert = require('koa-convert');
const views = require('koa-views');
const koaStatic = require('koa-static');
// const bodyParser = require('body-parser');
const bodyParser = require('koa-bodyparser');
const koaLogger = require('koa-logger');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const Router = require('koa-router');
var cors = require('koa2-cors');

const router = new Router();
const config = require('../config');
const routers = require('./routers/index');
console.log(config.database.USERNAME);
const app = new Koa();
app.use(cors());
//session存储配置
const sessionMysqlConfig = {
    user:config.database.USERNAME,
    password:config.database.PASSWORD,
    database:config.database.DATABASE,
    host:config.database.HOST,
};

//配置session中间件
app.use(session({
    key:'USE_SID',
    store:new MysqlStore(sessionMysqlConfig)
}));

// 配置控制台日志中间件
app.use(convert(koaLogger()));

app.use(bodyParser());

// 配置静态资源加载中间件
app.use(convert(koaStatic(
    path.join(__dirname , '../static')
)));

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

// http://localhost:9000/api/user/signIn.json  OK
// router.use('/app',routers.routes(),routers.allowedMethods());
//http://localhost:9000/app/api/user/signIn.json  OK
// router.use('/',routers.routes(),routers.allowedMethods());
//http://localhost:9000/api/user/signIn.json  not found


app.use(router.routes())
    .use(router.allowedMethods());
// 监听启动端口
app.listen( config.port );

console.log(`the server is start at port ${config.port}`);