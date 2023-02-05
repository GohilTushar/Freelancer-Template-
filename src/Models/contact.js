const mg=require("mongoose");
const cInfo=new mg.Schema({
    email:String,
    call:Number,
    query:String
})
module.exports=new mg.model("ContactInfo",cInfo);