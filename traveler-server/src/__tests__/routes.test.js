const supertest = require("supertest");
const http = require("http");
const app = require("../App");

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
  it("test sample", async () => {
    const res = await request.get("/api/v1/post");
    expect(res.statusCode).toEqual(200);
    // expect(res.body).toHaveProperty("data");
  });
  it("test sample2", async () => {
    const res = await request
      .post("/api/v1/user")
      .send({
        userName: "john",
        email: "test@test.com",
        password: "test123",
        confirmPassword: "test123"
      })
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("userName");
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
