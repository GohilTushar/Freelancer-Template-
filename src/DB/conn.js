const mg=require("mongoose");
const banner2 = require("../Models/banner2");
const banner3 = require("../Models/banner3");
const detail = require("../Models/detail");
const Service = require("../Models/Service");
const Slider = require("../Models/Slider");
mg.set('strictQuery', false);
mg.connect("mongodb://localhost:27017/Freelancer")
.then(()=>{
    console.log("mg success");
    // detail.create({
    //     brandName:"Info-Technical-Solution",
    //     brandIconUrl:"xyzabc",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact",
    //             url:"/contact"
    //         }

    //     ]
    // })

    //One Time
    
    
    // Slider.create([
    //     {
    //         imgUrl:"/images/i1.jpg",
    //         Title:"First",
    //         SubTitle:"Information For First Slide"
    //     },
    //     {
    //         imgUrl:"/images/i2.jpg",
    //         Title:"Second",
    //         SubTitle:"Information For Second Slide"
    //     },
    //     {
    //         imgUrl:"/images/i3.jpg",
    //         Title:"Third",
    //         SubTitle:"Information For Third Slide"
    //     }
    // ])


    // Service.create([
    //     {
    //     icon:"fab fa-accusoft",
    //     title:"Provide Best Courses",
    //     discription:"Courses For Placement",
    //     linktest:"https://www.google.com",
    //     link:"Check"
    //     },
    //     {
    //     icon:"fab fa-affiliatetheme",
    //     title:"Learn Project",
    //     discription:"Courses For Interview",
    //     linktest:"https://www.youtube.com",
    //     link:"Check"
    //     },
    //     {
    //     icon:"fab fa-accusoft",
    //     title:"Provide Best Courses",
    //     discription:"Courses For Placement",
    //     linktest:"https://www.google.com",
    //     link:"Check"
    //     }
    // ])

    // banner2.create([
    //     {
    //         text:"Hello",
    //         imgUrl:"/abcxyz"
    //     }
    // ])
    
    // banner3.create([
    //     {
    //         mainT:"How Are You",
    //         text:"Hello",
    //         imgUrl:"/abcxyz"
    //     }
    // ])
})
.catch((e)=>{
    console.log(e);
})
