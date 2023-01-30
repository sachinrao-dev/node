const dbConnect = require("../Mongodb");
const express = require("express");
const app = express();
 app.use(express.json());

app.put("/",async (req, resp)=>{
// resp.send({updated: "rename"});
let data = await dbConnect()
    data= await data.updateOne({name: req.body.name},{$set:req.body})
    resp.send({result: "update"});

});

app.listen(5000);