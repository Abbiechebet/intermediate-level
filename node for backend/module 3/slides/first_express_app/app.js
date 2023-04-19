const express = require ('express');

const app = express();

const bodyParser = require("body-parser")

app.use(bodyParser.json())// for parsing application/json

//app.use(bodyParser.urlencoded({ extended: true }));
 // for parsing application/x-www-form-urlencoded

// app.get("/", function(request,response){
//     return response.send("Hello Stutern students");
// });

// app.get("/instructor/:firstName",function(request,response){
//     return response.send(
//         `the name of this instructor is ${request.params.firstName}`);
// }),

// app.get("/", (req,res)=>{
//     res.json({message:"this is from Stutern"});
// });

// app.get("/instructor", (req,res)=>{
//     res.json({name:"Allison"});
// });

app.get("/", (req,res)=>{
    res.status(200).json({message:"unauthorized"});
});

app.get("/instructor", (req,res)=>{
    res.status(401).json({name:"Allison"});
});


app.listen(3000, function(){
    console.log(
        `the server has started at port 3000. head to localhost:3000 in /
        the browser and see what's there`);
});
