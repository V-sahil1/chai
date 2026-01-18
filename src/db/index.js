import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import express from "express"
const app = express();


const connectDB = async () => {
    try {
       const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(  connection);
       
        
        
      

    } catch (err) {
        console.error("connection Error", err);
       
        process.exit(1)

    }
}
export default connectDB;