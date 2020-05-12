/* eslint-disable no-undef */

// statusCode: 201,
// status: 201,
// statusType: 2,
// info: false,
// ok: true,
// redirect: false,
// clientError: false,
// serverError: false,
// error: false,
// created: true,
// accepted: false,
// noContent: false,
// badRequest: false,
// unauthorized: false,
// notAcceptable: false,
// forbidden: false,
// notFound: false,
// unprocessableEntity: false,
// type: 'application/json',
// charset: 'utf-8',
// links: {},
// setEncoding: [Function: bound ],
// redirects: []

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
      const {
        status,
        created,
        body: { success },
      } = await request
        .post("/api/v1/user")
        .set("Accept", "application/json")
        .send({
          email: "test@test.com",
          userName: "john",
          password: "test123",
          confirmPassword: "test123",
        });
      expect(status).toEqual(201);
      expect(created).toEqual(true);
      expect(success).toEqual(true);
    });

    it("로그인", async () => {
      const {
        status,
        body: { success, response },
      } = await request
        .post("/api/v1/auth/authenticate")
        .set("Accept", "application/json")
        .send({
          email: "test@test.com",
          password: "test123",
        });

      expect(status).toEqual(200);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("email");
      expect(response).toHaveProperty("userName");
      expect(response).toHaveProperty("token");

      store.setToken(response.token);
      store.setUsername(response.userName);
    });

    it("회원정보수정", async () => {
      const {
        status,
        body: { success },
      } = await request
        .patch("/api/v1/user")
        .set("Accept", "application/json")
        .set("Authorization", `bearer ${store.getToken()}`)
        .send({
          userName: "john2",
          password: "test1234",
          confirmPassword: "test1234",
        });

      expect(status).toEqual(200);
      expect(success).toEqual(true);
      store.setUsername("john2");
    });

    it("글작성", async () => {
      const token = store.getToken();
      const {
        status,
        body: { success, response },
      } = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${token}`)
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
        });

      expect(status).toEqual(201);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("id");
      store.setPid(response.id);
    });

    it("글작성", async () => {
      const token = store.getToken();
      const {
        status,
        body: { success, response },
      } = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${token}`)
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
        });

      expect(status).toEqual(201);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("id");
    });
    it("글작성", async () => {
      const token = store.getToken();
      const {
        status,
        body: { success, response },
      } = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${token}`)
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
        });

      expect(status).toEqual(201);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("id");
    });
    it("글작성", async () => {
      const token = store.getToken();
      const {
        status,
        body: { success, response },
      } = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${token}`)
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
        });
      expect(status).toEqual(201);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("id");
    });

    it("글작성", async () => {
      const token = store.getToken();
      const {
        status,
        body: { success, response },
      } = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${token}`)
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
        });
      expect(status).toEqual(201);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("id");
    });

    it("글작성", async () => {
      const token = store.getToken();
      const {
        status,
        body: { success, response },
      } = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${token}`)
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
        });
      expect(status).toEqual(201);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("id");
    });
    it("글작성", async () => {
      const token = store.getToken();

      const {
        status,
        body: { success, response },
      } = await request
        .post("/api/v1/post")
        .set("Authorization", `bearer ${token}`)
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
        });

      expect(status).toEqual(201);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("id");
    });
    it("회원정보 불러오기", async () => {
      const token = store.getToken();
      const username = store.getUsername();

      const {
        status,
        body: { success, response },
      } = await request
        .get(`/api/v1/user/${username}`)
        .set("Authorization", `bearer ${token}`);

      expect(status).toEqual(200);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("id");
      expect(response).toHaveProperty("userName");
      expect(response).toHaveProperty("posts");
      expect(Array.isArray(response.posts)).toEqual(true);
    });

    it("해시태그로 글 검색", async () => {
      const token = store.getToken();
      const hashtag = store.getHashtag();

      const {
        status,
        body: { success, response },
      } = await request
        .get(`/api/v1/post/list/byhashtag/${hashtag}`)
        .set("Authorization", `bearer ${token}`);

      expect(status).toEqual(200);
      expect(success).toEqual(true);
      expect(Array.isArray(response.rows)).toEqual(true);
      expect(response.rows.length <= 5).toEqual(true);
      expect(response.rows[0]).toHaveProperty("title");
      expect(response.rows[0]).toHaveProperty("user");
    });

    it("해시태그로 글 검색2", async () => {
      const token = store.getToken();
      const hashtag = store.getHashtag();
      const page = store.getPage();

      const {
        status,
        body: { success, response },
      } = await request
        .get(`/api/v1/post/list/byhashtag/${hashtag}/?page=${page}&limit=5`)
        .set("Authorization", `bearer ${token}`);

      expect(status).toEqual(200);
      expect(success).toEqual(true);
      expect(Array.isArray(response.rows)).toEqual(true);
      expect(response.rows.length <= 5).toEqual(true);
      expect(response.rows[0]).toHaveProperty("title");
      expect(response.rows[0]).toHaveProperty("user");
    });

    it("글리스트 불러오기", async () => {
      const token = store.getToken();
      const page = store.getPage();

      const {
        status,
        body: { success, response },
      } = await request
        .get(`/api/v1/post/list/?page=${page}&limit=5&boardId=1`)
        .set("Authorization", `bearer ${token}`);

      expect(status).toEqual(200);
      expect(success).toEqual(true);
      expect(Array.isArray(response.rows)).toEqual(true);
    });

    it("글읽기", async () => {
      const token = store.getToken();
      const postId = store.getPid();

      const {
        status,
        body: { success, response },
      } = await request
        .get(`/api/v1/post/${postId}`)
        .set("Authorization", `bearer ${token}`);

      expect(status).toEqual(200);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("id");
      expect(response).toHaveProperty("title");
      expect(response).toHaveProperty("content");
      expect(response).toHaveProperty("updatedAt");
      expect(response).toHaveProperty("user");
      expect(response.user).toHaveProperty("userName");
      expect(response.user.userName).toEqual(store.getUsername());
    });

    it("글읽기", async () => {
      const token = store.getToken();
      const postId = store.getPid();

      const {
        status,
        body: { success, response },
      } = await request
        .get(`/api/v1/post/${postId + 1}`)
        .set("Authorization", `bearer ${token}`);

      expect(status).toEqual(200);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("id");
      expect(response).toHaveProperty("title");
      expect(response).toHaveProperty("content");
      expect(response).toHaveProperty("updatedAt");
      expect(response).toHaveProperty("user");
      expect(response.user).toHaveProperty("userName");
      expect(response.user.userName).toEqual(store.getUsername());
    });

    it("글수정", async () => {
      const token = store.getToken();
      const postId = store.getPid();

      const {
        status,
        body: { success },
      } = await request
        .patch("/api/v1/post")
        .set("Authorization", `bearer ${token}`)
        .send({
          pid: postId,
          title: "updated test post title",
          content: [
            {
              type: "paragraph",
              children: [{ text: "updated test post paragraph" }],
            },
          ],
        });

      expect(status).toEqual(201);
      expect(success).toEqual(true);
    });

    it("글읽기_수정후", async () => {
      const token = store.getToken();
      const postId = store.getPid();
      const username = store.getUsername();

      const {
        status,
        body: { success, response },
      } = await request
        .get(`/api/v1/post/${postId}`)
        .set("Authorization", `bearer ${token}`);

      expect(status).toEqual(200);
      expect(success).toEqual(true);
      expect(response).toHaveProperty("id");
      expect(response).toHaveProperty("title");
      expect(response).toHaveProperty("content");
      expect(response).toHaveProperty("user");
      expect(response).toHaveProperty("updatedAt");

      expect(response.title).toEqual("updated test post title");
      expect(response.content).toEqual([
        {
          type: "paragraph",
          children: [{ text: "updated test post paragraph" }],
        },
      ]);
      expect(response.user).toHaveProperty("userName");
      expect(response.user.userName).toEqual(username);
    });

    it("글삭제", async () => {
      const token = store.getToken();
      const postId = store.getPid();

      const {
        status,
        body: { success },
      } = await request
        .delete("/api/v1/post")
        .set("Authorization", `bearer ${token}`)
        .send({
          pid: postId,
        });
      expect(status).toEqual(200);
      expect(success).toEqual(true);
    });

    it("글읽기_삭제후", async () => {
      const token = store.getToken();
      const postId = store.getPid();

      const { status } = await request
        .get(`/api/v1/post/${postId}`)
        .set("Authorization", `bearer ${token}`);

      expect(status).toEqual(404);
    });

    it("회원탈퇴", async () => {
      const token = store.getToken();

      const { status } = await request
        .delete("/api/v1/user")
        .set("Authorization", `bearer ${token}`);

      expect(status).toEqual(204);
    });
  });

  describe("Base::", () => {
    it("글분류 가져오기", async () => {
      const {
        status,
        body: { success, response },
      } = await request
        .get("/api/v1/board/boardlist")
        .set("Accept", "application/json");

      expect(status).toEqual(200);
      expect(success).toEqual(true);
      response.map((_) => {
        expect(_).toHaveProperty("id");
        expect(_).toHaveProperty("name");
        return null;
      });
    });

    it("1번 게시판 글조회 5개", async () => {
      const {
        status,
        body: { success },
      } = await request
        .get("/api/v1/board/1/posts/?limit=5")
        .set("Accept", "application/json");

      expect(status).toEqual(200);
      expect(success).toEqual(true);
    });
  });
});
