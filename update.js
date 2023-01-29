const dbConnect = require("./Mongodb");

const update =async ()=>{
    const data =await dbConnect();
    const result = data.updateOne({name: "Rao"},{$set: {name: "Sachin"}})
    console.log(result);
}

update();