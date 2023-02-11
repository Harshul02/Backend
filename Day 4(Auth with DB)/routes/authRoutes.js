const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const {
    validateName,
    validateEmail,
    validatePassword
} = require('../utils/validator.js')

const User = require("../models/userModels");

router.post("/signup", async (req,res)=>{
    try{
        const {name, email, password} = req.body;
        console.log(name, email, password);
        const userExist = await User.findOne({
            where:{
                email 
            }
        });
        
        if(userExist){
            res.send("User Exist");
        }

        if(!validateName(name)){
            res.send("Invalid name");
        }
        if(!validateEmail(email)){
            res.send("Invalid Email");
        }
        if(!validatePassword(password))
        {
            res.send("Invalid Password");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const saveToDb = {
            name, email, hashedPassword
        }
        const createdUser = await User.create(saveToDb);
        return res.status(500), send(err.message);
    }
    catch(e){res.send(e);}
});

router.post("/signin", async (req,res)=>{
    try{
        const {email, password} = req.body;
        const userExist = users.hasOwnProperty(email);
        
        if(!userExist){
            res.send("User does not Exist");
        }

        const passMatch = await bcrypt.compare(password, users[email].password)
        if(!passMatch)
        {
            res.send("password mismatch");
        }
        res.send("Success");
    }
    catch(e){res.send(e);}
});

module.exports = router;