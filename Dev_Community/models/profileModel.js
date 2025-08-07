const mongoose = require("mongoose");

const { Schema }=  mongoose;

const ProfileSchema = new Schema({
    profileImg:{type:String,required:true},
    experience:{type:String,required:true},
    githubProfile:{type:String,required:true},
    linkedinProfile:{type:String,required:true},
    codingplatform:{type:[String],required:true},
    skills:{type:[String],required:true},
    location:{type:String,required:true},
    achievements:{type:String,required:true},
    

},{
    timestamps: true
})

module.exports = mongoose.model("Profile",ProfileSchema);

//user-bio,skills-[],github,linkedin,coding platform,certifications,experiences