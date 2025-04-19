


// it will try to connect   from two different server
// and route the request


// use express http proxy


import express from "express";
import proxy from "express-http-proxy";

const app = express();

// Base route -> 3001
app.use("/", proxy("http://localhost:3001", {
  proxyReqPathResolver: req => "/"
}));

// Stress-test route -> 3002
app.use("/stress-test", proxy("http://localhost:3002", {
  proxyReqPathResolver: req => "/stress-test"
}));

app.listen(3000, () => {
  console.log("Gateway running on 3000");
});
