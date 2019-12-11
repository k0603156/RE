#!/usr/bin/env node
const { PORT } = require("./config");
const app = require("../app");
const debug = require("debug")("server:server");
const http = require("http");

app.set("PORT", PORT);
const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(PORT);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  let bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
