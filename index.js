const dbConnect = require('./Mongodb');

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// async function dbConnect() {
//   let result = await client.connect();
//   let db = result.db("e-com");
//   return db.collection("products");
//   // let collection = db.collection("products");
//   // let response =await collection.find({}).toArray();
//   // console.log(response);
// }

// dbConnect().then((res)=>{
//   res.find().toArray().then((data)=>{
//     console.log(data);
//   })

// });

const main = async () =>{
  let data = await dbConnect();
  data = await data.find({}).toArray();
  console.log(data);
}

main();