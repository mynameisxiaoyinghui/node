// let mongodb = require('mongodb');
// let MongoClient = mongodb.MongoClient;
// const URL = 'mongodb://127.0.0.1:27017';


let mongodb=require('mongodb');
let MongoClient=mongodb.MongoClient;
const URL='mongodb://127.0.0.1:27017'

class Db{
    constructor(dbName,collectionName){
        this.dbName = dbName;
        this.collectionName = collectionName;
    }
    find(obj,callback){
       let that=this;
       MongoClient.connect(URL,function(err,dbs){
           if (err) {
               console.log(err)
           } else {
                let db=dbs.db(that.dbName);
                db.createCollection(that.collectionName).then(function(collencion){
                    collencion.find(obj).toArray(function(err,data){
                        if (err) {
                            console.log(err)
                        } else {
                            typeof callback=='function' && callback(data)
                        }
                        dbs.close()
                    })
                })
           }
            

       })
    }
}
// class Db{
//     constructor(dbName,collectionName){
//         this.dbName = dbName;
//         this.collectionName = collectionName;
//     }

//     // 查找数据库
//     // find(obj,callback){
//     //     let that = this;
//     //     MongoClient.connect(URL,function(err,dbs){
//     //         if(err){
//     //             console.log(err)
//     //         }else{
//     //             let db = dbs.db(that.dbName);
//     //             db.createCollection(that.collectionName).then((collection)=>{
//     //                 collection.find(obj).toArray(function(err,data){
//     //                     dbs.close();
//     //                     if(err){
//     //                         console.log(err)
//     //                     }else{

//     //                         typeof callback == 'function' && callback(data);
//     //                     }
                       
//     //                 })
//     //             })
//     //         }
//     //     })

//     // }

// }


module.exports=Db