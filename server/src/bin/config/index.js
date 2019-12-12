/**
 * Normalize a port into a number, string, or false.
 */
// const normalizePort = val => {
//   const port = parseInt(val, 10);
//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }
//   if (port >= 0) {
//     // port number
//     return port;
//   }
//   return false;
// };

const PRODUCTION_PORT = 80;
const DEVELOPMENT_PORT = 8000;
const config = ({ NODE_ENV }) => {
  if (NODE_ENV === "production") {
    return {
      PORT: PRODUCTION_PORT
    };
  } else if (NODE_ENV === "development") {
    return {
      PORT: DEVELOPMENT_PORT
    };
  } else {
    throw new Error("NODE_ENV is wrong");
  }
};
module.exports = config(process.env);
