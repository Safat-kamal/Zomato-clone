import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const userModel = mongoose.model('users',userSchema);

export default userModel;