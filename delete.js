const dbConnect = require("./Mongodb");

const deleteMethod = async () =>{
const data = await dbConnect();
 const result =await data.deleteOne({name: "Sachin"});

 if(result.acknowledged){
    console.log("data is deleted");
 }
}

deleteMethod();