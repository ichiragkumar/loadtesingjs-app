// 3001 server
import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello from base route on 3001");
});

app.listen(3001, () => {
  console.log("server is running at 3001");
});
