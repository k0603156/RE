/* eslint-disable no-undef */
const supertest = require("supertest");
const http = require("http");
const app = require("../app");
const store = require("./store");


describe("Test Start::", () => {
  let server;
  let request;

  beforeAll((done) => {
    server = http.createServer(app);
    request = supertest(server);
    server.listen(done);
    store.setPage(1);
    store.setHashtag("tag2");
  });
  afterAll((done) => {
    server.close(done);
  });
  describe("User Flow::", () => {
    it("회원가입", async () => {
      const res = await request
        .post("/api/v1/user")
        .set("Accept", "application/json")
        .send({
          userName: "john",
          email: "test@test.com",
          password: "test123",
          confirmPassword: "test123",
        })
        .expect(201);
      expect(res.body).toHaveProperty("success");
      expect(res.body.success).toEqual(true);
    });

    it("로그인", async () => {
      const res = await request
        .post("/api/v1/auth/authenticate")
        .send({
          email: "test@test.com",
          password: "test123",
        })
        .expect(200);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("email");
      expect(res.body.response).toHaveProperty("userName");
      expect(res.body.response).toHaveProperty("token");

      store.setToken(res.body.response.token);
      store.setUsername(res.body.response.userName);
    });

    it("회원정보수정", async () => {
      const res = await request
        .patch("/api/v1/user")
        .set("Accept", "application/json")
        .set("Authorization", `bearer ${store.getToken()}`)
        .send({
          userName: "john2",
          password: "test1234",
          confirmPassword: "test1234",
        })
        .expect(200);
      expect(res.body).toHaveProperty("success");
      expect(res.body.success).toEqual(true);
      store.setUsername("john2");
    });
    it("글작성", async () => {
      const res = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${store.getToken()}`)
        .send({
          title: "test post title",
          boardId: 1,
          content: [
            {
              type: "paragraph",
              children: [{ text: "test post paragraph" }],
            },
          ],
          hashtags: [{ name: "tag1" }, { name: "tag2" }],
        })
        .expect(201);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("id");
      store.setPid(res.body.response.id);
    });

    it("글작성", async () => {
      const res = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${store.getToken()}`)
        .send({
          title: "test post title2",
          boardId: 1,
          content: [
            {
              type: "paragraph",
              children: [{ text: "test post paragraph2" }],
            },
          ],
          hashtags: [{ name: "tag3" }, { name: "tag4" }],
        })
        .expect(201);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("id");
    });
    it("글작성", async () => {
      const res = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${store.getToken()}`)
        .send({
          title: "test post title3",
          boardId: 1,
          content: [
            {
              type: "paragraph",
              children: [{ text: "test post paragraph3" }],
            },
          ],
          hashtags: [{ name: "tag2" }, { name: "tag5" }],
        })
        .expect(201);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("id");
    });
    it("글작성", async () => {
      const res = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${store.getToken()}`)
        .send({
          title: "test post title3",
          boardId: 1,
          content: [
            {
              type: "paragraph",
              children: [{ text: "test post paragraph3" }],
            },
          ],
          hashtags: [{ name: "tag2" }, { name: "tag5" }],
        })
        .expect(201);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("id");
    });

    it("글작성", async () => {
      const res = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${store.getToken()}`)
        .send({
          title: "test post title4",
          boardId: 1,
          content: [
            {
              type: "paragraph",
              children: [{ text: "test post paragraph4" }],
            },
          ],
          hashtags: [{ name: "tag2" }, { name: "tag5" }],
        })
        .expect(201);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("id");
    });

    it("글작성", async () => {
      const res = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${store.getToken()}`)
        .send({
          title: "test post title5",
          boardId: 1,
          content: [
            {
              type: "paragraph",
              children: [{ text: "test post paragraph5" }],
            },
          ],
          hashtags: [{ name: "tag2" }, { name: "tag5" }],
        })
        .expect(201);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("id");
    });
    it("글작성", async () => {
      const res = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${store.getToken()}`)
        .send({
          title: "test post title6",
          boardId: 1,
          content: [
            {
              type: "paragraph",
              children: [{ text: "test post paragraph6" }],
            },
          ],
          hashtags: [{ name: "tag2" }, { name: "tag5" }],
        })
        .expect(201);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("id");
    });
    it("회원정보 불러오기", async () => {
      const res = await request
        .get(`/api/v1/user/${store.getUsername()}`)
        .set("Authorization", `bearer ${store.getToken()}`)
        .expect(200);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("id");
      expect(res.body.response).toHaveProperty("userName");
      expect(res.body.response).toHaveProperty("posts");
      expect(Array.isArray(res.body.response.posts)).toEqual(true);
    });

    it("해시태그로 글 검색", async () => {
      const res = await request
        .get(`/api/v1/post/list/byhashtag/${store.getHashtag()}`)
        .set("Authorization", `bearer ${store.getToken()}`)
        .expect(200);
      expect(res.body.success).toEqual(true);
      expect(Array.isArray(res.body.response.rows)).toEqual(true);
      expect(res.body.response.rows.length <= 5).toEqual(true);
      expect(res.body.response.rows[0]).toHaveProperty("title");
      expect(res.body.response.rows[0]).toHaveProperty("user");
    });

    it("해시태그로 글 검색2", async () => {
      const res = await request
        .get(
          `/api/v1/post/list/byhashtag/${store.getHashtag()}/?page=${store.getPage()}&limit=5`,
        )
        .set("Authorization", `bearer ${store.getToken()}`)
        .expect(200);
      expect(res.body.success).toEqual(true);
      expect(Array.isArray(res.body.response.rows)).toEqual(true);
      expect(res.body.response.rows.length <= 5).toEqual(true);
      expect(res.body.response.rows[0]).toHaveProperty("title");
      expect(res.body.response.rows[0]).toHaveProperty("user");
    });

    it("글리스트 불러오기", async () => {
      const res = await request
        .get(`/api/v1/post/list/?page=${store.getPage()}&limit=5&boardId=1`)
        .set("Authorization", `bearer ${store.getToken()}`)
        .expect(200);
      expect(res.body.success).toEqual(true);
      expect(Array.isArray(res.body.response.rows)).toEqual(true);
    });

    it("글읽기", async () => {
      const res = await request
        .get(`/api/v1/post/${store.getPid()}`)
        .set("Authorization", `bearer ${store.getToken()}`)
        .expect(200);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("id");
      expect(res.body.response).toHaveProperty("title");
      expect(res.body.response).toHaveProperty("content");
      expect(res.body.response).toHaveProperty("updatedAt");
      expect(res.body.response).toHaveProperty("user");
      expect(res.body.response.user).toHaveProperty("userName");
      expect(res.body.response.user.userName).toEqual(store.getUsername());
    });
    it("글읽기", async () => {
      const res = await request
        .get(`/api/v1/post/${store.getPid() + 1}`)
        .set("Authorization", `bearer ${store.getToken()}`)
        .expect(200);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("id");
      expect(res.body.response).toHaveProperty("title");
      expect(res.body.response).toHaveProperty("content");
      expect(res.body.response).toHaveProperty("updatedAt");
      expect(res.body.response).toHaveProperty("user");
      expect(res.body.response.user).toHaveProperty("userName");
      expect(res.body.response.user.userName).toEqual(store.getUsername());
    });
    it("글수정", async () => {
      const res = await request
        .patch("/api/v1/post")
        .set("Authorization", `bearer ${store.getToken()}`)
        .send({
          pid: store.getPid(),
          title: "updated test post title",
          content: [
            {
              type: "paragraph",
              children: [{ text: "updated test post paragraph" }],
            },
          ],
        })
        .expect(201);
      expect(res.body.success).toEqual(true);
    });

    it("글읽기_수정후", async () => {
      const res = await request
        .get(`/api/v1/post/${store.getPid()}`)
        .set("Authorization", `bearer ${store.getToken()}`)
        .expect(200);
      expect(res.body.success).toEqual(true);
      expect(res.body.response).toHaveProperty("id");
      expect(res.body.response).toHaveProperty("title");
      expect(res.body.response.title).toEqual("updated test post title");
      expect(res.body.response).toHaveProperty("content");
      expect(res.body.response.content).toEqual([
        {
          type: "paragraph",
          children: [{ text: "updated test post paragraph" }],
        },
      ]);
      expect(res.body.response).toHaveProperty("updatedAt");
      expect(res.body.response).toHaveProperty("user");
      expect(res.body.response.user).toHaveProperty("userName");
      expect(res.body.response.user.userName).toEqual(store.getUsername());
    });

    it("글삭제", async () => {
      const res = await request
        .delete("/api/v1/post")
        .set("Authorization", `bearer ${store.getToken()}`)
        .send({
          pid: store.getPid(),
        })
        .expect(200);
      expect(res.body.success).toEqual(true);
    });

    it("글읽기_삭제후", async () => {
      await request
        .get(`/api/v1/post/${store.getPid()}`)
        .set("Authorization", `bearer ${store.getToken()}`)
        .expect(404);
    });

    it("회원탈퇴", async () => {
      await request
        .delete("/api/v1/user")
        .set("Authorization", `bearer ${store.getToken()}`)
        .expect(204);
    });
  });
  describe("Base::", () => {
    it("글분류 가져오기", async () => {
      const res = await request
        .get("/api/v1/board/boardlist")
        .set("Accept", "application/json")
        .expect(200);
      expect(res.body).toHaveProperty("success");
      expect(res.body.success).toEqual(true);
      res.body.response.map((_) => {
        expect(_).toHaveProperty("id");
        expect(_).toHaveProperty("name");
        return null;
      });
    });

    it("1번 게시판 글조회 5개", async () => {
      const res = await request
        .get("/api/v1/board/1/posts/?limit=5")
        .set("Accept", "application/json")
        .expect(200);
      expect(res.body).toHaveProperty("success");
      expect(res.body.success).toEqual(true);
    });
  });
});
