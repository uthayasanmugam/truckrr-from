import multer from 'multer';
import bodyParser from 'body-parser';
import express from "express";
import Image from '../model/image.js';


const app=express();

const upload = multer({dest:'uploads/'}).single("image");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

 export  const UploadImage= (req,res)=>{ 
    upload (req, res, async(err) => {
     if(err) {
       return   res.status(400).send("Something went wrong!");
     }
    //  console.log(res);
    //  res.send(req.file);
     const data=await Image.insertMany({
        image:req.file
     })
     if(data) res.send(data) 
   });
 };