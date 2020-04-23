// 创建一个可以储存二进制数的空间 ：
// const buf1 = Buffer.alloc(10);-->10个字节长度

let  bu=Buffer.alloc(50);
bu.write('发你文件发你我看见');//-->往空间里面加入数据
console.log(bu);
let va=bu.toString();//-->转换成字符串
console.log(va);
