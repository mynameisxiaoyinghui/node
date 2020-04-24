
let email = require('./mailer.js');
email.email({
    yourEmail:'3077607691@qq.com',
    title:'你好',
    content:rang()
})






function rang(){		
    var arr = ['a','b','c','d','e','f','g','h','A','B','C','D','E','F','G',0,1,2,3,4,5,6,7,7,8];
    arr.sort(function(a,b){
        return Math.random() - 0.5;
    })
    return ''+arr[0]+arr[1]+arr[2]+arr[3];				
}