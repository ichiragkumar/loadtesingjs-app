// 3002 server using cluster
import cluster from "cluster";
import os from "os";
import express from "express";
import morgan from "morgan";

const numWorkers = 6;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  const app = express();
  app.use(morgan("dev"));

  app.get("/stress-test", (req, res) => {
    for (let i = 0; i < 100000000; i++) {} // simulate load
    res.send("Hello from /stress-test on 3002");
  });

  app.listen(3002, () => {
    console.log(`Worker ${process.pid} started server at port 3002`);
  });
}
