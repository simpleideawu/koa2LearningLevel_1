const koa = require('koa');
const app = new koa();

app.use(async ctx => {
    if(ctx.method === 'POST'){
        let postData = await parsePostDate(ctx);
        ctx.body = postData;
    }
});

let parsePostDate = (ctx)=>{
    return new Promise((resolve,reject) => {
        try{
            let postdata="";
            ctx.req.on('data',(data)=>{
                postdata += data
            })
            ctx.req.addListener("end",function(){
                let parseData = parseQueryStr( postdata )
                resolve(parseData);
            })
        }catch(error){
            reject(error);
        }
    });
};

let parseQueryStr = (queryStr) => {
    let queryData={};
    let queryStrList = queryStr.split('&');
    console.log(queryStrList);
    for( let [index,queryStr] of queryStrList.entries() ){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData
};
app.listen(3000,()=>{

    console.log('server has started at port 3000');

});
