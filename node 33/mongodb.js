// //npm i 引用包
// let mongodb = require('mongodb');//mongodb数据库
// let MongoClient = mongodb.MongoClient; //MongoClient链接数据库
// let URLbase = 'mongodb://127.0.0.1:27017';//黑窗口打开mongodb的时候，会自动显示地址信息
// MongoClient.connect(URLbase,function(err,dbs){//-->err用于连接到的具体的数据库，用于dbs连接集合或者创建集合
//     let xyh=dbs.db('xyh');//连接到具体数据库。

//     xyh.createCollection('age').then(function(collection){//-->email表示需要创建的数据库集合名称

//         collection.find({
//              name:'张李春',
//              link:'敲代码'
//         }).toArray(function(err,data){
//             console.log(err,data)
//         })

//         xyh.close()//操作数据库结束，必须关闭数据库
//     })

  
        
// })  
class Db{
    constructor(dbName,collectionName){
        this.dbName = dbName;
        this.collectionName = collectionName;
    }
    find(obj,callback){
       let that=this;
       MongoClient.connect(URL,function(err,dbs){
            let db=dbs.db(that.dbName);
            db.createCollection(that.collectionName).then(function(collencion){
                collencion.find(obj).toArray(function(err,data){
                    if (err) {
                        console.log(err)
                    } else {
                        typeof callback=='function' && callback(data)
                    }
                })
            })

       })
    }
}

/*
    mongodb模块 ：用于连接数据库，操作数据库


    下载包：
      npm i mongodb  

    引进包


*/
let mongodb = require('mongodb');

let MongoClient = mongodb.MongoClient;

let URLbase = 'mongodb://127.0.0.1:27017';

// 连接数据库
MongoClient.connect(URLbase,function(err,dbs){
    //console.log(err);
    // 连接到具体的数据库
    let db = dbs.db('xyh');
    // 连接集合，或者创建集合
    db.createCollection('user').then(function(collection){

        // 插入一条数据/
            // collection.insertOne({
            //         name:'张李春',
            //         link:'121e'
            //     },function(err){//返回的err表示是否插入成功
            //             console.log(err)
            //         })
          
        //插入多条数据
            // collection.insertMany([{name:'121'},{link:'1111113'}],function(err){
            //         console.log(err)
            // })
        //删除数据
            // collection.deleteOne({
            //     name: '张李春', link: '121e' 
            // },function(err){
            //     console.log(err)
            // })
        //删除多条数据
            // collection.deleteMany({
            //     link: '1111113',
            //     name: '张李春', 
            //     link: '121e'
            // },function(err){
            //     console.log(err)
            // })
        // 更新数据
         collection.update(
             {name:'121'},//-->需要修改的数据
             {name:'我爱你'},//-->修改后的数据
         function(err,res){

         }) 
        // 查找数据库
        collection.find(//{
        //    link:{$lt:10}
        //}
        ).toArray(function(err,data){
            console.log(err,data)
        })
        dbs.close();
    }); 
    // 操作数据库结束，必须关闭数据库
});





//console.log(mongodb);

