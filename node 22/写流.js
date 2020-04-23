var fl=require('fs');
var wir=fl.createWriteStream('1.txt');
// 创建一个写流

// 写入数据
wir.write('wnfiwenfiwnfwie');
// 关闭流
wir.end();