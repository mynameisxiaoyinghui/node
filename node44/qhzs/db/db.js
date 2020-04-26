let mongos=require('mongoose');
//mongos里面的集合， Schema 构造函数，用于创建模板 不需要自己封装模块
console.log(mongos);
mongos.connect('mongodb://127.0.0.1:27017/phzs',function(err){
    if (err) {
        console.log(err)
    } else {
        console.log('链接成功');
        let obj=mongos.model('info',shc)//插入集合
        // obj.create({//插入数据，插入一条数据
        //         pass:'124',
        //         useremailer:'30044161'
        // }).then(function(data){
        //     console.log(data)
        // })
        // obj.insertMany([{//插入数据，插入多条数据
        //     pass:'124',
        //     useremailer:'30044161'
        // },{
        //     pass:'1fwefwef',
        //     useremailer:'3fwefwgrt'
        // },{
        //     pass:'2345',
        //     useremailer:'4001太阳'
        // }]).then(function(data){
        //     console.log(data)
        //         })
        obj.find(
        //     {//-->查询数据
        //     username: '路人甲',
        //     useremailer: '30044161'
        // }
        ).then(function(data){
           var datas=data;
        //   obj.remove({//--删除数据
        //     datas
        //    }).then(function(data){
               console.log(data)
        //    })  
        });
        // obj.update({
        //     username: '路人甲',
        //     pass: '124'
        // },{
        //    pass: 'VS不是不',
        //    name:'v八五九八v文件'
        // }).then(function(data){
        //     console.log(data)
        // })
    }
  
    

})
let shc=mongos.Schema({//-->定义数据库集合类型
    pass:String,
    username:{
        type:String,
        default:'路人甲'//也可以给定一个默认参数，当没传值时：
    },
    useremailer:String,
    userimg:String
})

//-->创建一个集合
// module.exports=    /code:mongoose.model('code',code),