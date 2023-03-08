import express from "express";
import bodyParser from 'body-parser';
import { getsingleUser, userRegister } from "../controller/user.js";

const app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

const router=express.Router();

//register route
router.post('/register',userRegister);
router.get('/getsingleuser',getsingleUser);
//router.get('/searching',search);

export default router;