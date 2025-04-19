


// it will try to connect   from two different server
// and route the request


// use express tttp proxy



import express from 'express'
import proxy from 'express-http-proxy'
const app = express()


app.use('/stress-test',proxy("http://localhost:3002") )

// if you want you can bring any url from any device/deployed server and replace the proxy url
// app.use('/',proxy("http://localhost:3001") )

app.use('/',proxy("http://localhost:3001") )


app.listen(3000, ()=>{
    console.log("main gateway service is running at 3000")
})