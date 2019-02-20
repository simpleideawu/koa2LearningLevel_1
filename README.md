# koa2LearningLevel_1
# koa2第一阶段学习整理

## lesson 01
    安装nodemon，使用nodemon server.js启动项目调试
    搭建koa环境
    npm init -y
    npm install koa --save

## lesson 02 get请求的接收

    http://localhost:3000?a=1&b=2

    {"url":"/?a=1&b=2","req_query":{"a":"1","b":"2"},"req_query_string":"a=1&b=2"}


## lesson 03 post请求接收

    获取Post请求的步骤：

    解析上下文ctx中的原生nodex.js对象req。
    将POST表单数据解析成query string-字符串.(例如:user=jspang&age=18)
    将字符串转换成JSON格式。
    ctx.request和ctx.req的区别

    ctx.request:是Koa2中context经过封装的请求对象，它用起来更直观和简单。
    ctx.req:是context提供的node.js原生HTTP请求对象。这个虽然不那么直观，但是可以得到更多的内容，适合我们深度编程。
    ctx.method 得到请求类型

    Koa2中提供了ctx.method属性，可以得到请求的类型
    
## lesson 04 koa-bodyparser中间件
    npm install koa-bodyparser --save
    koa-bodyparser中间件可以把koa2上下文的formData数据解析到ctx.request.body中。

## lesson 05 koa原生路由实现
    ctx.request.url

## lesson 06 koa-router    
    npm install --save koa-router
    koa-router简单实例入门

## lesson 07 koa-router层级
    router相当于父级：router.use(‘/page’, page.routes(), page.allowedMethods())。
    用来设置层级路由
## lesson 08 koa + cookie
    设置读取cookie，设置cookie超时等选项
    Cookie选项
    
    比如我们要存储用户名，保留用户登录状态时，你可以选择7天内不用登录，也可以选择30天内不用登录。这就需要在写入是配置一些选项：
    
    domain：写入cookie所在的域名
    path：写入cookie所在的路径
    maxAge：Cookie最大有效时长
    expires：cookie失效时间
    httpOnly:是否只用http请求中获得
    overwirte：
    
## lesson 09 koa + ejs模板
    安装依赖项
    
## lesson 10 koa-static静态资源中间件
    npm install --save koa-static  
    const staticPath = './static';
    
    app.use(Static(
        path.join( __dirname,  staticPath)
    ));
    
## lesson 11 koa mysql数据库连接
      
    
