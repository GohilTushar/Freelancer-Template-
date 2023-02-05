const exp=require("express");
const app=exp();
require("./DB/conn");

const port=process.env.PORT||369;
const hbs=require("hbs");
const path=require("path");

const bp=require("body-parser");
app.use(bp.urlencoded({
    extended:true
}))

const routes=require("./Routes/main");
const bodyParser = require("body-parser");
app.use("/",routes);

const sP=path.join(__dirname,"../public");
const tP=path.join(__dirname,"../templates/views");
const pP=path.join(__dirname,"../templates/partials");

app.use(exp.static(sP));
app.set("view engine","hbs");
app.set("views",tP);
hbs.registerPartials(pP);

app.listen(port,"127.0.0.1",()=>{
    console.log("Running at "+port);
})