const mg=require("mongoose");
const b2Info=new mg.Schema({
    mainT:String,
    text:String,
    imgUrl:String
})
module.exports=new mg.model("banner2",b2Info);