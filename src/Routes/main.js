const exp=require("express");
const rts=exp.Router();

const dtls=require("../Models/detail");
const Slider = require("../Models/Slider");
const sld=require("../Models/Slider");
const svs=require("../Models/Service");
const cnt=require("../Models/contact");
const b2i=require("../Models/banner2");
const b3i=require("../Models/banner3");

rts.get("/",async(req,res)=>{
    const d = await dtls.findOne({"_id":"63d6787803d3d50d914de600"});
    const s=await sld.find();
    const ser=await svs.find();
    const b2=await b2i.find(); 
    const b3=await b3i.find(); 
    // console.log(ser);
    res.render("index",{
        detail:d,
        slide:s,
        services:ser,
        b2information:b2,
        b3information:b3

    });
})


rts.get("/about",async(req,res)=>{
    const d = await dtls.findOne({"_id":"63d6787803d3d50d914de600"});
    res.render("about",{
        detail:d,
    });
})
rts.get("/contact",async(req,res)=>{
    const d = await dtls.findOne({"_id":"63d6787803d3d50d914de600"});
    res.render("contact",{
        detail:d
    });
})
rts.post("/processForm",async(req,res)=>{
    try{
        const Cdata=await cnt.create(req.body);
        console.log(Cdata); 
        res.redirect("/");
    }
    catch(e){
        console.log(e);
        res.redirect("/");
    }
})
module.exports=rts;