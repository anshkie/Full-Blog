const express=require("express");
const { createUserCtrl, registerUserCtrl, loginUserCtrl, profileUserCtrl, coverPhotoUserCtrl, logoutUserCtrl, profileUploadUserCtrl, updateUserCtrl } = require("../../controllers/users/userCtrl");
const protected=require("../../middlewares/protected");
const storage = require("../../config/cloudinary");
const multer=require("multer")
const userRoute=express.Router();
//instance of multer
const upload=multer({storage})
userRoute.post("/register",registerUserCtrl)
userRoute.post("/login",loginUserCtrl)
userRoute.get("/profile",protected,profileUserCtrl)
userRoute.put("/cover-photo-upload/",protected,upload.single('profile'),coverPhotoUserCtrl)
userRoute.get("/:id",createUserCtrl)
userRoute.get("/logout",logoutUserCtrl)
userRoute.put("/profile-upload",protected,upload.single('profile'),protected,profileUploadUserCtrl)
userRoute.put("/update/:id",updateUserCtrl)
module.exports=userRoute