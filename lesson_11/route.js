const Router = require('koa-router');

// 模拟数据库, 存储用户信息
const users = new Map([['laowang', {username: 'laowang', password: '123456'}]]);

// 默认提示信息
const tips = `
    GET     / 查看登录信息
    POST    / {username: laowang; password: 123456} 发此请求以登录
    DELETE  / 注销
`;

let router = new Router();
module.exports = app => {

    // 查看登录信息
    router.get('/', ctx => {
        // 查看 session 中是否有用户登录信息
        if (ctx.session.user) {
            ctx.body = {
                status: '您已登录',
                session: ctx.session.user
            }
        } else {
            ctx.body = tips
        }
    })

    // 登录
    router.post('/', ctx => {
        // 从请求体中获取用户名和密码
        const { username, password } = ctx.request.body;
        // 检查用户是否已经登录
        if (ctx.session.user) {
            ctx.body = `${ctx.session.user.username} 已登录，请勿重复登录`
        }
        // 从'数据库'中查找是否有此用户,有则继续判断密码是否正确
        else if (users.has(username)) {
            // 模拟从数据库查找用户的操作
            const user = users.get(username)
            // 判断用户名和密码是否正确
            if (username === user.username && password === user.password) {
                // 验证通过则将用户信息写入 session 中
                ctx.session.user = {
                    username,
                    password
                }
                ctx.body = '登陆成功，请访问 GET / 查看session中的信息'
            } else {
                ctx.body = '用户名或密码不正确'
            }
        } else {
            ctx.body = '用户不存在'
        }
    })

    // 注销
    router.del('/', ctx => {
        ctx.session = null
        ctx.body = '您已注销'
    })

    // 处理未匹配到的路由
    router.get('/*', ctx => {
        ctx.body = tips
    })

    app.use(router.routes());
}
