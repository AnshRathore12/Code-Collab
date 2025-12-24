import express from "express"

import {ENV} from "./lib/env.js"

const app=express();

app.get("/health",(req,res)=>{
  res.status(200).json({msg:"msg from api from server"})
})

app.listen(3000,()=>console.log("Server is listening on port "+ENV.PORT))