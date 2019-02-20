# koa2LearningLevel_1
koa2第一阶段学习整理

lesson 01
    搭建koa环境
    npm init -y
    npm install koa --save

lesson 02 get请求的接收

    http://localhost:3000?a=1&b=2

    {"url":"/?a=1&b=2","req_query":{"a":"1","b":"2"},"req_query_string":"a=1&b=2"}


lesson 03 post请求接收

    获取Post请求的步骤：

    解析上下文ctx中的原生nodex.js对象req。
    将POST表单数据解析成query string-字符串.(例如:user=jspang&age=18)
    将字符串转换成JSON格式。
    ctx.request和ctx.req的区别

    ctx.request:是Koa2中context经过封装的请求对象，它用起来更直观和简单。
    ctx.req:是context提供的node.js原生HTTP请求对象。这个虽然不那么直观，但是可以得到更多的内容，适合我们深度编程。
    ctx.method 得到请求类型

    Koa2中提供了ctx.method属性，可以得到请求的类型



