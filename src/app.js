const mongodb=require("mongodb");
const mongoClient=mongodb.MongoClient
const connectionUrl='mongodb://127.0.0.1:27017'
const dbname="Task1"
mongoClient.connect(connectionUrl,(error,res1)=>{
    if(error){
        return console.log('error has occured')
    }
    console.log('all perfect')
    const db=res1.db(dbname)
    // insertOne
    // One
    db.collection('users').insertOne({
        name:"aya",
        age:24
    },(error,data)=>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
    })
    // Two
    db.collection('users').insertOne({
        name:"Ahmed",
        age:28
    },(error,data)=>{
        if(error){
            console.log('unable to insert data')
        }
        console.log(data.insertedId)
    })
    // insertMany 10
    db.collection('users').insertMany(
        [
            {
                name:"salma",
                age:25
            },
            {
                name:"sara",
                age:30
            },
            {
                name:"nada",
                age:25
            },
            {
                name:"Ibrahim",
                age:26
            },
            {
                name:"Menna",
                age:25
            },
            {
                name:"islam",
                age:25
            },
            {
                name:"Gana",
                age:15
            },
            {
                name:"Fatma",
                age:27
            },
            {
                name:"Hager",
                age:22
            },
            {
                name:"Alaa",
                age:25
            }
        ], (error,data)=>{
            if(error){
                console.log('unable to insert data')
            }
            console.log(data.insertedCount)
        })
    // find match 25
    db.collection('users').find({age:25}).toArray((error,users)=>{
        if(error){
            return console.log('error has occured')
        }
        console.log(users)
    })
    // limit 3 25y
    db.collection('users').find({age:25}).limit(3).toArray((error,users)=>{
        if(error){
            return console.log('error has occured')
        }
        console.log(users)
    })
    // $set name 4
    db.collection('users').updateOne({_id:mongodb.ObjectId("64d824d549c2460416af61ba")},{
        $set:{name:"Shimaa"}
    })
    .then((data1)=>(console.log(data1.modifiedCount)))
    .catch((error)=>(console.log(error)))

    db.collection('users').updateOne({_id:mongodb.ObjectId("64d824d549c2460416af61bb")},{
        $set:{name:"mohamed"}
    })
    .then((data1)=>(console.log(data1.modifiedCount)))
    .catch((error)=>(console.log(error)))

    db.collection('users').updateOne({_id:mongodb.ObjectId("64d8250e74c698f50d0131df")},{
        $set:{name:"Khaled"}
    })
    .then((data1)=>(console.log(data1.modifiedCount)))
    .catch((error)=>(console.log(error)))

    db.collection('users').updateOne({_id:mongodb.ObjectId("64d8250e74c698f50d0131e0")},{
        $set:{name:"Doaa"}
    })
    .then((data1)=>(console.log(data1.modifiedCount)))
    .catch((error)=>(console.log(error)))
    // updateOne for 1 inc 20
    db.collection('users').updateOne({_id:mongodb.ObjectId("64d824d549c2460416af61ba")},{
        $inc:{age:20}
    })
    .then((data1)=>(console.log(data1.modifiedCount)))
    .catch((error)=>(console.log(error)))
    // updateMany inc age 10
    db.collection('users').updateMany({},{
        $inc:{age:10}
    })
    .then((data1)=>(console.log(data1.modifiedCount)))
    .catch((error)=>(console.log(error)))
    // deleteOne 1
    db.collection('users').deleteOne({_id:mongodb.ObjectId("64d824d549c2460416af61ba")})
    .then((data1)=>(console.log(data1.deletedCount)))
    .catch((error)=>(console.log(error)))
    // deleteMany age 35
    db.collection('users').deleteMany({age:35})
    .then((data1)=>(console.log(data1.deletedCount)))
    .catch((error)=>(console.log(error)))
})
