const supertest = require("supertest");
const http = require("http");
const { app } = require("../App");

describe("Demo test", () => {
  let server;
  let request;

  beforeAll(done => {
    server = http.createServer(app);
    request = supertest(server);
    server.listen(done);
  });
  afterAll(done => {
    server.close(done);
  });
  it("should create a new post", async () => {
    const res = await request.get("/api/user/");
    expect(res.statusCode).toEqual(200);
    // expect(res.body).toHaveProperty("data");
  });
});

// const request = require("supertest");
// const express = require("express");

// const app = express();
// const port = 3000;

// app.get("/hello", (req, res) => {
//   res.send("world!");
// });

// app.get("/status", (req, res) => {
//   res.send("ok");
// });

// app.listen(port);
// describe("Post Endpoints", () => {
//   it("should create a new post", async () => {
//     const res = await request(app);
//     request(app)
//       .get("/hello")
//       .then(response => {
//         expect(response.text).toBe("world!");
//         expect(response.statusCode).toEqual(200);
//         done();
//       });
//   });
// });
