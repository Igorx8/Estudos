const http = require("http");
const cluster = require("cluster");
const numCpus = require("os").cpus().length;

if (cluster.isMaster) {
  console.log("Master proccess is running");
  //Fork workers
  for (let i = 0; i < numCpus; i++) {
    const worker = cluster.fork();
    worker.send(`Child worker ${worker.id}`);
    worker.on("message", (msg) =>
      console.log(`Worker(${worker.id}) to master: ${msg}`)
    );
  }

  //  In case of a worker stops, we start a new worker

  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`
    );
    console.log("Starting a new worker");
    cluster.fork();
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.write(`I'm the worker ${cluster.worker.id} \n`);
      res.end(
        `This is as cluster ${
          cluster.isMaster ? "master" : "child"
        } process, ${numCpus} child process has been created`
      );
    })
    .listen(5000);

  cluster.worker.on("message", (msg) => {
    console.log(`Master to worker(${cluster.worker.id}): ${msg} \n`);
  });
  process.send(`Hello master, I am the worker ${cluster.worker.id}! \n`);
}

// http
//   .createServer((req, res) => {
//     res.writeHead(200);
//     res.write("Hello world, mastering node \n");
//     res.end(
//       `This is a cluster ${cluster.isMaster ? "master" : "child"} process`
//     );
//   })
//   .listen(8001);

// console.log("Listening on port 8001");
