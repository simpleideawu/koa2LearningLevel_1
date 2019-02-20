const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const app = new koa();
app.use(bodyParser());

app.use(async ctx => {
    let url = ctx.request.url;
    console.log('url:',url);
    let html = await route(url);
    ctx.body = html;
})



let render = (page) => {
    return new Promise((resolve,reject) => {
        let pageUrl = `./page/${page}`;
        console.log('pageUrl:',pageUrl);
        fs.readFile(pageUrl,'binary',(err,data) => {
            if(err){
                reject(err);
            }else{
                console.log('data:',data);
                resolve(data);
            }
        });
    });
};

async function route(url){
    let page = '404.html';
    switch (url) {
        case '/':
            page ='index.html';
            break;
        case '/index':
            page ='index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }

    let html = await render(page);
    console.log('html:',html);
    return html;
}

app.listen(3000,()=>{
    console.log('server has started at port 3000');
})
