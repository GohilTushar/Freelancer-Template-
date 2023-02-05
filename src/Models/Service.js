const mg=require("mongoose");
const srvInfo=new mg.Schema({
    icon:String,
    title:String,
    discription:String,
    linktext:String,
    link:String
})
module.exports=new mg.model("ServiceInfo",srvInfo);