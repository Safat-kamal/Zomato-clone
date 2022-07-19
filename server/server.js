import express from "express";
import cors from "cors";
import './Database/db.js';
import user from './Models/authModel.js';
import {DeliveryModel,DiningModel,NightModel} from "./Models/contentData.js";
import fetchUser from './middleware/authMiddleware.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(express.json());
app.use(cors());



// APIs EndPoints
app.get('/', (req,res)=>{
    res.status(200).send("Server is online");
});
// sign-up
app.post('/sign-up',async (req,res)=>{
    try{
        const existUser = await user.findOne({email:req.body.email})
        if(existUser){
            return res.status(400).send("Please Choose different Email Id")
        }
        const salt = await bcrypt.genSalt(10);
        const SecurePassword = await bcrypt.hash(req.body.password,salt);
        const data ={
            "fullName" : req.body.fullName,
            "email": req.body.email,
            "password": SecurePassword
        }
        user.create(data,(err,Result)=>{
            if(err){
                res.status(500).send(err.message)
            }
            else{
                res.status(201).send("User Created Successfully")
            }
        })
    }
    catch(erroR){
        res.status(500).send(erroR.message)
    }
})
// log-in
app.post('/login',async (req,res)=>{
    try{
        let userExist = await user.findOne({"email":req.body.email});
        if(userExist){
            const passwordComapre = await bcrypt.compare(req.body.password,userExist.password);
            if(passwordComapre){
                const data ={
                    User :{
                        id: userExist.id
                    }
                }
                const jwt_scret = "you are the legitmate";
                const auth_token = jsonwebtoken.sign(data,jwt_scret);
                if(auth_token){
                    res.status(200).send({
                        "token" : auth_token
                    });
                }
            }
            else{
                return res.status(400).send("Invalid Credentials")
            }
        }
        else{
            return res.status(400).send("Invalid Credentials")
        }
    }
    catch(erroR){
        res.status(500).send(erroR.message)
    }
});
// get loggged-in user details
app.post('/getuser', fetchUser, async (req,res)=>{
    try{
        const getUser = await user.findById(req.user.id).select('-password -createdAt');
        res.status(200).send(getUser);
    }
    catch(error){
        res.status(500).send(error.message)
    } 
});
// delivery data
app.get('/deliveryData',async (req,res)=>{
    try{
        let result = await DeliveryModel.find();
        if(result){
            res.status(200).send(result);
        }
        else{
            res.status(400).send("Sorry! Not Available at this moment");
        }
    }
    catch(error){
        res.status(400).send("Sorry! Not Available at this moment");
    }
});
// Dining Out Data 
app.get('/diningOutData',async (req,res)=>{
    try{
        let result = await DiningModel.find();
        if(result){
            res.status(200).send(result);
        }
        else{
            res.status(400).send("Sorry! Not Available at this moment");
        }
    }
    catch(error){
        res.status(400).send("Sorry! Not Available at this moment");
    }
});
// NightLife Data
app.get('/nightLifeData',async (req,res)=>{
    try{
        let result = await NightModel.find();
        if(result){
            res.status(200).send(result);
        }
        else{
            res.status(400).send("Sorry! Not Available at this moment");
        }
    }
    catch(error){
        res.status(400).send("Sorry! Not Available at this moment");
    }
});



// Listener
app.listen(port, ()=>
    console.log(`App is running on port ${port}....`)
);