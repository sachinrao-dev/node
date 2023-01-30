const mongoose = require("mongoose");


const main = async ()=>{
await mongoose.connect("mongodb://localhost:27017/e-com");
const ProductsSchema = new mongoose.Schema({
    name: String
})

const productsModel = mongoose.model("products", ProductsSchema);
let data = new productsModel({name: "Neekhil"});
let result = await data.save();
console.log(result);
}

main();