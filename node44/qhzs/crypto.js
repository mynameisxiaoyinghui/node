const cryto=require('crypto');//crypto 模块提供了加密功能，

const hash = cryto.createHash('sha256');
hash.on('readable', () => {
    // 哈希流只会生成一个元素。
    const data = hash.read();
    if (data) {
      console.log(data);
      // 打印:
      //   164345eba9bccbafb94b27b8299d49cc2d80627fc9995b03230965e6d8bcbf56
    }
  });
  
  hash.write('要创建哈希摘要的数据');
  hash.end();