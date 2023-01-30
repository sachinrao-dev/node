const dbConnect = require("../Mongodb");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/", async (req, resp)=>{
//  resp.send( req.body)
let data =await dbConnect();
data = await data.insertOne(req.body);
resp.send(req.body);

});

// const insertDb = async () =>{
// let  data = await dbConnect();
// data = await data.find({}).toArray();

// }

// insertDb();
app.listen(5000);