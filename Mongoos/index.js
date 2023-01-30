const mongoose = require("mongoose");

mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017/e-com");

const ProductsSchema = new mongoose.Schema({
    name: String,
    age: Number,
    // brand: String,
    // category: String 
})
const saveInDb = async ()=>{
const productsModel = mongoose.model("products", ProductsSchema);
let data = new productsModel({name: "Neekhil"});
let result = await data.save();
console.log(result);
}


const upDateInDb =async () =>{
    const productsModel = mongoose.model("products", ProductsSchema);
 let data = await productsModel.updateOne({name: "sachin"},{$set: { age: 23}});
 console.log(data);
}
// upDateInDb();

const deleteDb =async () =>{
    const productsModel = mongoose.model("products", ProductsSchema);
    let data = await productsModel.deleteOne({name: "sachin"});
    console.log(data);

}

deleteDb();