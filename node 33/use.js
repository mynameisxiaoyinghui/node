// let Db = require('./newmongodb');

// let db = new Db('xyh','pass');

// db.find({},function(data){
//     console.log(data)
// })
// db.insertMany([{name:'林志玲',age:44},{age:333}],function(onoff){
    
//     db.find({},function(data){
//         console.log(data)
//     })
    
// });

// db.deleteOne({name:'林志玲'},function(){
//     db.find({},function(data){
//         console.log(data)
//     })
// })
let Db=require('./newmongodb');
let db=new Db('xyh','user');
db.find({},function(data){
    console.log(data)
})