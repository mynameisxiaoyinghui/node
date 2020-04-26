
let crypto = require('crypto'); //封装一个加密模块
function encryption(str){
    let c = crypto.createHmac('sha256', str).update(str).digest('hex');
    return c;
}

module.exports = {
    encryption
}

