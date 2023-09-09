const protected=(req,res,next)=>{
    //check if user is login
    if(req.session.userAuth){
        next()
    }
    else
    {
        next(res.json({message:"not authorized"}))
    }
};
module.exports=protected;