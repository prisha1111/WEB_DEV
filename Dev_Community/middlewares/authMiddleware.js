const jwt=require("jsonwebtoken")

const authMiddleware = async(req,res,next)=>{
    const { authorization } = req.headers;
    console.log(authorization);
    // console.log(req);
    
    const token=authorization.split(" ")[1]
    // console.log(token); 

    const tokenObject=await jwt.verify(token,process.env.JWT_SECRET_KEY);

    const { _id}=tokenObject;
    console.log(_id);
    //find in db with that id->if present then next(),else return


    next();
}

//one more middleware to make
module.exports = { authMiddleware};