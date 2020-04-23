var fl=require('fs');
// 创建一个流
var read=fl.createReadStream('kk.mp4');//-->读取的文件路径
// console.log(read)
var num=0;
read.on('data',function(err){
    num++;
    console.log(num);
})
read.on('end',function(){
    // num++;
    console.log('结束');
})
