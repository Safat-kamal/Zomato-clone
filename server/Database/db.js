import mongoose from "mongoose";
const DbUrl = "mongodb+srv://root:root@cluster0.keh8d6m.mongodb.net/zomato?retryWrites=true&w=majority";

mongoose.connect(DbUrl,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then((response)=>
console.log('Database Connected Successfully.')).catch((error)=>{
    console.log(error.message);
});