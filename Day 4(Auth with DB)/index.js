const express = require("express");
const routes = require("./routes/authRoutes")
const app = express();
const createDB = require("../Day 4(Auth with DB)/config/db");
const PORT = 5000;

createDB.sync().then(() =>{
    console.log("Connected To DB");
});

//MiddleWare    --Starting

//accept json
app.use(express.json());
//accept body
app.use(express.urlencoded({extended: true}));

//MiddleWare    --Ending

//use the HTML
app.use(express.static("public"));

app.use("/api/v1", routes)

app.listen(PORT, ()=>{
    console.log(`Server Running at ${PORT}`);
})
