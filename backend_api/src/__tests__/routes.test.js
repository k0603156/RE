const supertest = require("supertest");
const http = require("http");
const app = require("../app");
const store = require("./store");
describe("user flow test", () => {
  let server;
  let request;

  beforeAll(done => {
    server = http.createServer(app);
    request = supertest(server);
    server.listen(done);
    store.setPage(1);
    store.setHashtag("tag2");
  });
  afterAll(done => {
    server.close(done);
  });
  it("회원가입", async () => {
    console.log("회원가입");
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

  it("로그인", async () => {
    console.log("로그인");
    const res = await request
      .post("/api/v1/auth/authenticate")
      .send({
        email: "test@test.com",
        password: "test123"
      })
      .expect(200);
    expect(res.body.success).toEqual(true);
    expect(res.body.response).toHaveProperty("email");
    expect(res.body.response).toHaveProperty("userName");
    expect(res.body.response).toHaveProperty("token");

    store.setToken(res.body.response.token);
    store.setUsername(res.body.response.userName);
  });

  it("글작성", async () => {
    console.log("글작성");
    const res = await request
      .post("/api/v1/post")
      .set("Authorization", "bearer " + store.getToken())
      .send({
        title: "test post title",
        content: [
          {
            type: "paragraph",
            children: [{ text: "test post paragraph" }]
          }
        ],
        hashtags: [{ name: "tag1" }, { name: "tag2" }]
      })
      .expect(201);
    expect(res.body.success).toEqual(true);
    expect(res.body.response).toHaveProperty("id");
    store.setPid(res.body.response.id);
  });

  it("글작성", async () => {
    console.log("글작성");
    const res = await request
      .post("/api/v1/post")
      .set("Authorization", "bearer " + store.getToken())
      .send({
        title: "test post title2",
        content: [
          {
            type: "paragraph",
            children: [{ text: "test post paragraph2" }]
          }
        ],
        hashtags: [{ name: "tag3" }, { name: "tag4" }]
      })
      .expect(201);
    expect(res.body.success).toEqual(true);
    expect(res.body.response).toHaveProperty("id");
  });
  it("글작성", async () => {
    console.log("글작성");
    const res = await request
      .post("/api/v1/post")
      .set("Authorization", "bearer " + store.getToken())
      .send({
        title: "test post title3",
        content: [
          {
            type: "paragraph",
            children: [{ text: "test post paragraph3" }]
          }
        ],
        hashtags: [{ name: "tag2" }, { name: "tag5" }]
      })
      .expect(201);
    expect(res.body.success).toEqual(true);
    expect(res.body.response).toHaveProperty("id");
  });
  it("회원정보 불러오기", async () => {
    console.log("회원정보 불러오기");
    const res = await request
      .get(`/api/v1/user/${store.getUsername()}`)
      .set("Authorization", "bearer " + store.getToken())
      .expect(200);
    expect(res.body.success).toEqual(true);
    expect(res.body.response).toHaveProperty("id");
    expect(res.body.response).toHaveProperty("userName");
    expect(res.body.response).toHaveProperty("posts");
    expect(Array.isArray(res.body.response.posts)).toEqual(true);
  });

  it("해시태그로 글 검색", async () => {
    console.log("해시태그로 글 검색");
    const res = await request
      .get(`/api/v1/post/byhashtag/${store.getHashtag()}`)
      .set("Authorization", "bearer " + store.getToken())
      .expect(200);
    expect(res.body.success).toEqual(true);
    expect(res.body.response).toHaveProperty("posts");
    expect(Array.isArray(res.body.response.posts)).toEqual(true);
  });

  it("글리스트 불러오기", async () => {
    console.log("글리스트 불러오기");

    const res = await request
      .get(`/api/v1/post/list/${store.getPage()}`)
      .set("Authorization", "bearer " + store.getToken())
      .expect(200);
    expect(Array.isArray(res.body.response)).toEqual(true);
  });

  it("글읽기", async () => {
    console.log("글읽기");
    const res = await request
      .get(`/api/v1/post/${store.getPid()}`)
      .set("Authorization", "bearer " + store.getToken())
      .expect(200);
    expect(res.body.success).toEqual(true);
    expect(res.body.response).toHaveProperty("id");
    expect(res.body.response).toHaveProperty("title");
    expect(res.body.response).toHaveProperty("content");
    expect(res.body.response).toHaveProperty("updatedAt");
    expect(res.body.response).toHaveProperty("user");
    expect(res.body.response.user).toHaveProperty("userName");
    expect(res.body.response.user.userName).toEqual("john");
  });

  it("글수정", async () => {
    console.log("글수정");
    const res = await request
      .patch("/api/v1/post")
      .set("Authorization", "bearer " + store.getToken())
      .send({
        pid: store.getPid(),
        title: "updated test post title",
        content: [
          {
            type: "paragraph",
            children: [{ text: "updated test post paragraph" }]
          }
        ]
      })
      .expect(201);
    expect(res.body.success).toEqual(true);
  });

  it("글읽기_수정후", async () => {
    console.log("글읽기_수정후");
    const res = await request
      .get(`/api/v1/post/${store.getPid()}`)
      .set("Authorization", "bearer " + store.getToken())
      .expect(200);
    expect(res.body.success).toEqual(true);
    expect(res.body.response).toHaveProperty("id");
    expect(res.body.response).toHaveProperty("title");
    expect(res.body.response.title).toEqual("updated test post title");
    expect(res.body.response).toHaveProperty("content");
    expect(res.body.response.content).toEqual([
      {
        type: "paragraph",
        children: [{ text: "updated test post paragraph" }]
      }
    ]);
    expect(res.body.response).toHaveProperty("updatedAt");
    expect(res.body.response).toHaveProperty("user");
    expect(res.body.response.user).toHaveProperty("userName");
    expect(res.body.response.user.userName).toEqual("john");
  });

  it("글삭제", async () => {
    console.log("글삭제");
    const res = await request
      .delete(`/api/v1/post`)
      .set("Authorization", "bearer " + store.getToken())
      .send({
        pid: store.getPid()
      })
      .expect(200);
    expect(res.body.success).toEqual(true);
  });

  it("글읽기_삭제후", async () => {
    console.log("글읽기_삭제후");
    const res = await request
      .get(`/api/v1/post/${store.getPid}`)
      .set("Authorization", "bearer " + store.getToken())
      .expect(404);
    expect(res.body.success).toEqual(false);
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
