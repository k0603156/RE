module.exports = (() => {
  function setToken(token) {
    this.token = token;
  }
  function getToken() {
    return this.token;
  }
  function setUsername(username) {
    this.username = username;
  }
  function getUsername() {
    return this.username;
  }
  function setPid(pid) {
    this.pid = pid;
  }
  function getPid() {
    return this.pid;
  }
  function setHashtag(hashtag) {
    this.hashtag = hashtag;
  }
  function getHashtag() {
    return this.hashtag;
  }
  function setPage(page) {
    this.page = page;
  }
  function getPage() {
    return this.page;
  }
  return {
    setToken,
    getToken,
    setUsername,
    getUsername,
    setPid,
    getPid,
    setHashtag,
    getHashtag,
    setPage,
    getPage,
  };
})();
