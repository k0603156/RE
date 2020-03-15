const supertest = require("supertest");
const http = require("http");
const app = require("../App");

describe("test", () => {
  let server;
  let request;
  let token;
  beforeAll(done => {
    server = http.createServer(app);
    request = supertest(server);
    server.listen(done);
  });
  afterAll(done => {
    server.close(done);
  });
  it("회원가입 테스트", async () => {
    const res = await request
      .post("/api/v1/user")
      .set("Accept", "application/json")
      .send({
        userName: "john",
        email: "test@test.com",
        password: "test123",
        confirmPassword: "test123"
      })
      .expect(201);
    expect(res.body).toHaveProperty("success");
    expect(res.body.success).toEqual(true);
  });

  it("로그인 테스트", async () => {
    const res = await request
      .post("/api/v1/auth/authenticate")
      .send({
        email: "test@test.com",
        password: "test123"
      })
      .expect(200);
    expect(res.body).toHaveProperty("email");
    expect(res.body).toHaveProperty("userName");
    expect(res.body).toHaveProperty("token");

    token = res.body.token;
  });

  it("글작성 테스트", async () => {
    const res = await request
      .post("/api/v1/post")
      .set("Authorization", "bearer " + token)
      .send({
        title: "test post title",
        content: [
          {
            type: "paragraph",
            children: [{ text: "test post paragraph" }]
          }
        ]
      })
      .expect(201);
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
