const express = require("express");
const helmet = require("helmet");
const projectRouter = require("./routers/project-router");
const resourceRouter = require("./routers/resource-router");
const taskRouter = require("./routers/task-router");

const server = express();
const port = process.env.PORT || 3000;

server.use(helmet());
server.use(express.json());

server.use("/projects", projectRouter);
server.use("/resources", resourceRouter);
server.use("/tasks", taskRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
