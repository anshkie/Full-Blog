const express=require("express")
const postRoute=express.Router();
module.exports=postRoute;
postRoute.get("/",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"Post list",
        });
    }
    catch(error){
        console.log(error)
    }
})
postRoute.get("/:id",async(req,res)=>{
    try{
        res.json({
            status:"successs",
            user:"Post Details",
        });

    }
    catch(error){
        res.json(error);
    }
})
postRoute.delete("/:id",async(req,res)=>{
    try{
        res.json({
            status:"successs",
            user:"Post Deleted",
        });

    }
    catch(error){
        res.json(error);
    }
})
postRoute.put("/:id",async(req,res)=>{
    try{
        res.json({
            status:"successs",
            user:"Post Deleted",
        });

    }
    catch(error){
        res.json(error);
    }
})
postRoute.post("/",async(req,res)=>{
    try{
        res.json({
            status:"successs",
            user:"Post created",
        });

    }
    catch(error){
        res.json(error);
    }
})