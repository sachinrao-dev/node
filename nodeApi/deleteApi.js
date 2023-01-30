const dbConnect = require("../Mongodb");
const express = require("express");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());
app.delete("/:id", async (req, resp)=>{
 const data = await dbConnect();
 let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})

    resp.send(result);

})

app.listen(5000);