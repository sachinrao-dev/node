const dbConnect = require("./Mongodb");

const insert = async () =>{
    let db = await dbConnect();
    const result = await db.insertOne(
        {
            name: "sachin",
            age: 23,
            phone: 9450752811,
        }
    )
    if(result.acknowledged){
        console.log("data inserted");
    }
    // console.log(result);
}

insert();