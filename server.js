const express=require('express')
const commentRoute = require('./routes/comments/commentRoute')
const postRoute = require('./routes/posts/postRoute')
const userRoute = require('./routes/users/userRoute')
const session=require("express-session")
const Mongostore=require("connect-mongo")
const app=express()
//middlewares
//--------
app.use(express.json())//pass incoming data
//session config
app.use(session({
    secret:"Myname",
    resave:false,
    saveUninitialized:true,
    store:new Mongostore({
        mongoUrl:"mongodb+srv://anshnew41:swatigupta02@blog-v3-data.w5feiiw.mongodb.net/?retryWrites=true&w=majority",
        ttl: 24*60*60,//1 day
    })
})
);
require('./config/dbConnect')
//middlewares
//routes

//users route
//------
//POST/api/v1/users/register
app.use("/api/v1/comments",commentRoute);
app.use("/api/v1/posts",postRoute)
app.use("/api/v1/users",userRoute)
/*app.post("/api/v1/users/register",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User registered",
        });
    }
    catch(error){
        console.log(error)
    }
})*/
//POST/api/v1/users/login
/*app.post("/api/v1/users/login",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User login",
        });
    }
    catch(error){
        console.log(error)
    }
})*/
//get/api/v1/users/:id
/*app.get("/api/v1/users/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User Details",
        });
    }
    catch(error){
        console.log(error)
    }
})*/
//get/api/v1/users/profile/:id
/*app.get("/api/v1/users/profile/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User profile",
        });
    }
    catch(error){
        console.log(error)
    }
})*/
//put/api/v1/users/profile-upload/:id
/*app.put("/api/v1/users/profile-upload/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"profile image upload",
        });
    }
    catch(error){
        console.log(error)
    }
})*/

//put/api/v1/users/cover-photo-upload/:id
/*app.put("/api/v1/users/cover-photo-upload/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"user cover image upload",
        });
    }
    catch(error){
        console.log(error)
    }
})*/

//Get/api/v1/users/logout
/*app.get("/api/v1/users/logout",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"user logout",
        });
    }
    catch(error){
        console.log(error)
    }
})*/
//post route
//------------
//POST/api/v1/posts
/*app.post("/api/v1/posts",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"Post created",
        });
    }
    catch(error){
        console.log(error)
    }
})*/
//Get/api/v1/posts
/*app.get("/api/v1/posts",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"Post list",
        });
    }
    catch(error){
        console.log(error)
    }
})*/
//Get/api/v1/posts/:id
/*app.get("/api/v1/posts/:id",async(req,res)=>{
    try{
        res.json({
            status:"successs",
            user:"Post Details",
        });

    }
    catch(error){
        res.json(error);
    }
})*/
//Delete/api/v1/posts/:id
/*app.delete("/api/v1/posts/:id",async(req,res)=>{
    try{
        res.json({
            status:"successs",
            user:"Post Deleted",
        });

    }
    catch(error){
        res.json(error);
    }
})*/
//Update/api/v1/posts/:id
/*app.put("/api/v1/posts/:id",async(req,res)=>{
    try{
        res.json({
            status:"successs",
            user:"Post Deleted",
        });

    }
    catch(error){
        res.json(error);
    }
})*/
//comments
//--------
//POST/api/v1/comments
/*app.post("/api/v1/comments",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"comment created",
        });
    }
    catch(error){
        console.log(error)
    }
})*/

//Get/api/v1/comments/:id
/*app.get("/api/v1/comments/:id",async(req,res)=>{
    try{
        res.json({
            status:"successs",
            user:"comments Details",
        });

    }
    catch(error){
        res.json(error);
    }
})*/
//Delete/api/v1/comments/:id
/*app.delete("/api/v1/comments/:id",async(req,res)=>{
    try{
        res.json({
            status:"successs",
            user:"comments Deleted",
        });

    }
    catch(error){
        res.json(error);
    }
})*/
//Update/api/v1/comments/:id
/*app.put("/api/v1/comments/:id",async(req,res)=>{
    try{
        res.json({
            status:"successs",
            user:"comments updated",
        });

    }
    catch(error){
        res.json(error);
    }
})*/
//ERROR handlers
//listen server
const port=process.env.port||9000;
app.listen(port,console.log("server is listening"))