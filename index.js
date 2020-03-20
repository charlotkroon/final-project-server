const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const eventRouter = require("./event/router");
const userRouter = require("./user/router");
const loginRouter = require("./auth/router");
const ticketRouter = require("./tickets/router");
const commentRouter = require("./comments/router");

const app = express();

const port = 4000;

const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();

app.use(corsMiddleware, parserMiddleware);
app.use(eventRouter);
app.use(userRouter);
app.use(loginRouter);
app.use(ticketRouter);
app.use(commentRouter);

app.listen(port, () =>
  console.log(`Ticket Appie is listening to port ${port}`)
);
