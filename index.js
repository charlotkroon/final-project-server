// import external dependencies
const cors = require("cors");
const express = require("express");
const ticketRouter = require("./tickets/router");
const eventRouter = require("./event/router");
const userRouter = require("./user/router");

const app = express();

//cors always has to be the first middleware, nothing else can happen before cors. you need to unlock the request (security)
const corsMiddleware = cors();
app.use(corsMiddleware); //now it's unshielded/unlocked

const parser = express.json();
app.use(parser);

app.get("/test", (request, response) => {
  console.log("req.body test:", request.body);
  const { name } = request.body;

  response.send(name);
});

app.use(userRouter);
app.use(ticketRouter);
app.use(eventRouter);

port = process.env.PORT || 4000;

// confirmation callback
function confirm() {
  console.log(`Listening on :${port}`);
}

// Start the server
app.listen(port, confirm);
