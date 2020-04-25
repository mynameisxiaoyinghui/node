//专用来写接口文档的
let express=require('express');
let router=express.Router();
router.use('/',function(req,res){
    console.log('1111')
    res.end();
});
router.get('/',function(req,res){
    console.log('222');
    res.end();

});
router.post('/',function(req,res){
    console.log('333');
    res.end();
})

module.express=router

