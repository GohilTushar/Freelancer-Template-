const mg=require("mongoose");
const info=new mg.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[
        {
            label:String,
            url:String
        }
    ]
})
module.exports=new mg.model("FreelancerInfo",info);
                            //collection info