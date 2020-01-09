const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./Routes");
const { authenticateJwt } = require("./MiddleWares/passport");

const PORT = process.env.PORT || 8000;
const STATIC_PATH = path.resolve(__dirname, "./build/");
const STATIC_ENTRY_POINT = path.resolve(__dirname, "./build/index.html");
const middleWares = [
  logger("dev"),
  express.json(),
  express.urlencoded({ extended: false }),
  authenticateJwt
];

app.disable("x-powered-by");
app.set("port", PORT);
app.use(express.static(STATIC_PATH));
process.env.NODE_ENV !== "production" && app.use(cors());
middleWares.map(mw => app.use(mw));
routes(app);
app.get("*", (req, res) => {
  res.sendFile(STATIC_ENTRY_POINT);
});
module.exports = app;
