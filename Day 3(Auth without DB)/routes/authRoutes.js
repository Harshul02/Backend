const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

let users = {

}

router.post("/signup", async (req,res)=>{
    try{
        const {name, email, password} = req.body;
        console.log(name, email, password);
        const userExist = users.hasOwnProperty(email);
        
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
        const Fpassword = await bcrypt.hash(password, 10);
        users[email] = {name, password: Fpassword};
        res.send("Success");
    }
    catch(e){res.send(e);}
});

module.exports = router;