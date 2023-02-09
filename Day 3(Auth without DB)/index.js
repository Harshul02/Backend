const express = require("express");

const app = express();

const PORT = 5000;

//MiddleWare    --Starting

//accept json
app.use(express.json());
//accept body
app.use(express.urlencoded({extended: true}));

//MiddleWare    --Ending

app.listen(PORT, ()=>{
    console.log(`Server Running at ${PORT}`);
})
