const cors = require("cors");
const express = require("express");

//Routers
const userRouter = require("./user/router");

const app = express();

const corsMiddleware = cors();
app.use(corsMiddleware);

const parser = express.json();
app.use(parser);

app.get("/test", (request, response) => {
  console.log("request.body test:", request.body);
  const { name } = request.body;

  response.send(name);
});

app.use(userRouter);

port = 4000;

function confirm() {
  console.log(`Listening on :${port}`);
}

app.listen(port, confirm);
