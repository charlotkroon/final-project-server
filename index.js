const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const parserMiddleware = bodyParser.json();
const userRouter = require("./user/router");
const authRouter = require("./auth/router");
const ticketRouter = require("./tickets/router");

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

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(userRouter);
app.use(authRouter);
app.use(ticketRouter);

const port = process.env.PORT || 4000;

function confirm() {
  console.log(`Listening on :${port}`);
}

app.listen(port, confirm);
