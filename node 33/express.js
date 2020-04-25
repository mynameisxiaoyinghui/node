let ex=require('express');
let ssa=ex();

let reout=require('./router/index.js');
ssa.use('/',reout)

ssa.listen(4001)