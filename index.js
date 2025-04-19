import express from "express";
import morgan from "morgan";



const app = express()
app.use(morgan("dev"))

app.get("/", (req, res)=>{
    for (let i =0; i<10000000000;i++){
    }
    res.send("hello world")
})


app.get("/stress-test", (req, res)=>{
    for (let i =0; i<10000000000;i++){
    }
    res.send("hello world")
})



app.listen(3000, ()=>{
    console.log("server is running at 3000")
})