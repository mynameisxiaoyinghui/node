let ex=require('express');
let sxs=ex();
sxs.get('/',function(res,req){
    console.log(11);
    req.send('111')
});

sxs.post('/',function(res,req){
    console.log(222)
    req.send('222')

})
sxs.listen(4001)