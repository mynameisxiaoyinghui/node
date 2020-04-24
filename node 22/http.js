/*两种功能：
1. 客户端发送请求
    1. 反向代理、服务器代理
    2. 网络爬虫

    http.request({

        },function(){});
        {

        }

2. 创建服务器端
*/
//开启链接
// var fs=require('fs');
// var http=require('http');
// var shuju=fs.createWriteStream('1.html');
// let  ht=http.request('https://www.mogu.com/',function(err){
//        err.on('data',function(eda){
//           shuju.write(eda)
//        });
//        err.on('end',function(){

//        })
// })
// ht.end();

// https://www.bilibili.com/
let fs=require('fs');
let htts=require('https');//-->针对的是https协议的
let http=require('http');//-->针对的是http协议的
var dat=fs.createWriteStream('1.html');
var che=require('cheerio')
var jso=htts.request('https://www.baidu.com/index.php?tn=95058559_8_hao_pg',function(err){
 
       err.on('data',function(dara){
          dat.write(dara);
          console.log(dara)
          // var $=che.load(dara);
          // var img 
        });
        err.on('end',function(){

        })
});

jso.end()//==>结束请求
