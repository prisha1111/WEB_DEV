const Profile=require("../models/profileModel")

const addProfileDetails=async(req,res)=>{
    const{profileImg,experience,githubProfile,linkedinProfile,codingplatform,skills,location,achienvements}=req.body;

    //validate data
    if(!profileImg ||!experience|| !githubProfile|| !linkedinProfile||!codingplatform||!skills||!location||!achienvements){
        return res.status(500).json({
            error:"Please add all details"
        });
    }

    const newProfile=await Profile.create({
        profileImg,
        experience,
        githubProfile,
        linkedinProfile,
        codingplatform,
        skills,
        location,
        achienvements
    })
    const profileAdd=await newProfile.save();

    return res.status(201).json({
        message:"Data added",
        data:profileAdd
    })
}

const updateProfileDetails=async(req,res)=>{
    return;
}

module.exports={addProfileDetails,updateProfileDetails}