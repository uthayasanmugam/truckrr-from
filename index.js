import express from "express";
import mongoose from "mongoose";
// import multer from "multer";
import user from "./router/user.js"
import image from "./router/image.js"

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/getinformation')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());

app.use('/api/user',user);
app.use('/api/image',image);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}...`));