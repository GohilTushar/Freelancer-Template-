const mg=require("mongoose");
const b1Info=new mg.Schema({
    text:String,
    imgUrl:String
})
module.exports=new mg.model("banner1",b1Info);