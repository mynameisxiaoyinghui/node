let http=require('http');
let num=0;
let url=require('url');//-->取出地址栏的方法
let string=require('querystring');
var str=null;

http.createServer(function(req,res){
    if (req.method == 'GET') {
        var path = url.parse(req.url);
        console.log(path.pathname)
     if (path.pathname== '/favicon.ico') {
         res.end()
     } else {
         let js=string.parse(path.query);
         res.writeHead(200,{//-->设置响应头部信息
            'content-type':'text/html;charset=utf-8'
         });
         res.write('get请求')
         res.end()
     }
    } else if(req.method =='POST'){
        req.on('data',function(err){
            str += err
        });
        req.on('end',function(){
            res.writeHead(200,{//-->设置响应头部信息
                'content-type':'text/html;charset=utf-8'
             });
             res.write('post请求')
             res.end()
        })
    }
}).listen(4000,function(){
        console.log('创建成功')
    })