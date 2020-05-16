//tells us if server is running or not
const express=require("express");
const router=express.Router();

router.get("/", (req,res) =>{
    res.send({response: "The server is running sucessfully"}).status(200);
});

modules.exports=router;
