import express from "express"
const app = express();
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from "cookie-parser";
import WebSocket, { WebSocketServer } from 'ws';
import jwt from "jsonwebtoken"

// used to read the cookies
app.use(cookieParser())
dotenv.config()

// for parsing the JSON object
app.use(express.json())
app.use(express.urlencoded({extended : true}))

async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
}

main()
.then(() => console.log("DB connected"))
.catch(err => console.log(err))

// app.use(cors({
//     origin : process.env.CLIENT_URL,
//     credentials : true
//   }))

// this is the error handling middleware

app.use((err,req,res,next) => {
    console.log( "|| Error is : ", err);
    const status = err.status || 500;
    const message = err.message || "Something went wrong..."
  
    res.status(status).json({
      status,
      message,
      error : true
    })
  })

const server = app.listen(process.env.PORT,() => {
    console.log("App started at port 3000");
})
