import express from "express";
import path from "path";
import serverRender from "./serverRender";

const app = express();

const serve = express.static(path.resolve("./build"), {
  index: false
});

app.use(serve);
app.use(serverRender);

app.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});
