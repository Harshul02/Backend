const express = require("express");
const router = express.Router();

let users = {

}

router.post("/signup", (req,res)=>{
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

        users[email] = {name, password};
    }
    catch(e){}
});

module.exports = router;