/**
 * restful api 子路由
 */

const Router = require('koa-router')
let router = new Router();
const userInfoController = require('../controllers/user-info')
console.log('userInfoController:::',userInfoController);
const routers = router
        .post('/user/signIn.json', userInfoController.signIn)
        .post('/user/signUp.json', userInfoController.signUp)
        // .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)


module.exports = routers