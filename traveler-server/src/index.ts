import App from "./@config/app";
const port = process.env.PORT || 8000;

App.listen(port, () => {
  console.dir(App);
  console.dir(process.env.NODE_ENV);
  console.log(`Express server linstening on Port ${port}!`);
});
// const server = http.createServer(App);
// server.listen(port);
// server.on("error", onError);
// server.on("listening", onListening);

// function onError(error: any) {
//   if (error.syscall !== "listen") {
//     throw error;
//   }
//   switch (error.code) {
//     case "EACCES":
//       console.error(port + " requires elevated privileges");
//       process.exit(1);
//       break;
//     case "EADDRINUSE":
//       console.error(port + " is already in use");
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// }

// function onListening() {
//   const addr = server.address() || "ww";
//   var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
//   console.log(`Express server linstening on Port ${bind}!`);
// }
