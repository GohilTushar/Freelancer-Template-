const mg =require("mongoose");
const sinfo=new mg.Schema({
    imgUrl:String,
    Title:String,
    SubTitle:String,
    Class:String
})
module.exports=new mg.model("sliderInfo",sinfo);