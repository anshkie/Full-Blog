const express=require("express")
const commentRoute=express.Router();
commentRoute.get("/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"comment details",
        });
    }
    catch(error){
        console.log(error)
    }
})
commentRoute.post("/",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"comment created",
        });
    }
    catch(error){
        console.log(error)
    }
})
commentRoute.delete("/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"comment deleted",
        });
    }
    catch(error){
        console.log(error)
    }
})
commentRoute.put("/:id",async(req,res)=>{
    try{
        res.json({
            status:"successs",
            user:"comments updated",
        });

    }
    catch(error){
        res.json(error);
    }
})
module.exports=commentRoute;
