const User=require("../models/userModel");


const registerUser=async(req,res)=>{
    const {firstName,lastName, emailid, password}=req.body;

    //validation
    if(!firstName ||!lastName|| !emailid|| !password){
        res.code(400).send({message:"Please add all field"})
    }

    const user=new User({
        "firstName":"Neha",
        "lastName":"Gupta",
        "emailid":"neha@gmail.com",
        "password":"123"
    })

    await user.save();

}
module.exports=registerUser;

// const loginUser=()=>{

// }