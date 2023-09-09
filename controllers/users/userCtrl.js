const User = require("../../models/user/user");

/*const bodyParser = require('body-parser')
const express=require("express")
const app=express();
app.use(bodyParser.json)*/
//app.use(bodyParser.json()) // for parsing application/json
const bcrypt = require("bcryptjs");
const generateToken = require("../../utils/generateToken");
const createUserCtrl = async (req, res) => {
  try {
    //get userId fro params
    const userId = req.params.id;
    //find the user
    const user = await User.findById(userId);
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};
const registerUserCtrl = async (req, res, next) => {
  const { fullname, password, email } = req.body;

  try {
    //check if email exist
    const userFound = await User.findOne({ email });
    if (userFound) {
      res.json({ message: "user is already registered" });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create user
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    res.json({
      status: "success",
      fullname: user.fullname,
      email: user.email,
      id: user._id,
      //token:generateToken(userFound._id),
    });
  } catch (error) {
    console.log(error);
  }
};
const loginUserCtrl = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound) res.json({ message: "invalid" });
    const isPasswordMatch = await bcrypt.compare(password, userFound.password);
    if (!isPasswordMatch) res.json({ message: "Inavlid credential" });
    //save the user info
    req.session.userAuth = userFound._id;
    console.log(req.session);
    res.json({
      status: "success",
      fullname: userFound.fullname,
      id: userFound._id,
      token: generateToken(userFound._id),
    });
  } catch (error) {
    console.log(error);
  }
};
const profileUserCtrl = async (req, res) => {
  try {
    //get the login user
    const userId = req.session.userAuth;
    //find the user
    const user = await User.findById(userId);
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};
const coverPhotoUserCtrl = async (req, res) => {
  console.log(req.params)
  try {
    //1. Find the user to be updated
    const userId=req.session.userAuth
    const userFound=await User.findById(userId)
    //2.check if user is found
    if(!userFound)
    {
        return res.json({message:"user not found"})
    }
    //5. Update profile photo
    await User.findByIdAndUpdate(userId,{
      coverImage:req.file.path
    },
    {
        new:true,
    })
    res.json({
      status: "success",
      data: "DONE SUCCESSFULLY",
    });
  } catch (error) {
    console.log(error);
  }
};
const logoutUserCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "user logout",
    });
  } catch (error) {
    console.log(error);
  }
};
const profileUploadUserCtrl = async (req, res) => {
    console.log(req.file.path)
  try {
    //1. Find the user to be updated
    const userId=req.session.userAuth
    const userFound=await User.findById(userId)
    //2.check if user is found
    if(!userFound)
    {
        return res.json({message:"user not found"})
    }
    //5. Update profile photo
    await User.findByIdAndUpdate(userId,{
        profileImage:req.file.path
    },
    {
        new:true,
    })
    res.json({
      status: "success",
      data: "DONE SUCCESSFULLY",
    });
  } catch (error) {
    console.log(error);
  }
};
const updateUserCtrl = async (req, res) => {
  let user;
  try {
    const { email } = req.body;
    //check if email is not taken
    if (email) {
      const emailTaken = await User.findOne({ email });
      if (emailTaken) {
        res.json({ message: "already taken" });
      }
      //update the user
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          fullname,
          email,
        },
        {
          new: true,
        }
      );
    }
    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updateUserCtrl,
  createUserCtrl,
  registerUserCtrl,
  loginUserCtrl,
  profileUserCtrl,
  coverPhotoUserCtrl,
  logoutUserCtrl,
  profileUploadUserCtrl,
};
