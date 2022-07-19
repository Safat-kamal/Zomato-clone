import jsonwebtoken from 'jsonwebtoken';
const jwt_scret = "you are the legitmate";


const fetchUser = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        return res.status(400).send("Please Authenticate with valid token")
    }
    try{
        const data = jsonwebtoken.verify(token,jwt_scret);
        //set user id for the check exitstance of the loggin user 
        req.user = data.User;
        next();
    }
    catch(error){
        return res.status(400).send("Please Authenticate with valid token")
    }

}

export default fetchUser;