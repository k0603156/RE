const supertest = require("supertest");
const http = require("http");
const app = require("../app");
describe("base test", () => {
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
  it("글분류 가져오기", async () => {
    const res = await request
      .get("/api/v1/base/boardlist")
      .set("Accept", "application/json")
      .expect(200);
    expect(res.body).toHaveProperty("success");
    expect(res.body.success).toEqual(true);
    res.body.response.map(_ => {
      expect(_).toHaveProperty("id");
      expect(_).toHaveProperty("name");
    });
  });
});
