### GCE 인스턴스생성

```
Shell접속
```

### Git

```
$ sudo apt-get update
$ sudo apt-get upgrade -y
$ sudo apt-get install git
or
$ sudo apt-get install git-all
$ git --version
```

### Docker 설치

```
$ sudo apt-get remove docker docker-engine docker.io containerd runc
$ sudo apt-get update
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
$ sudo docker run hello-world
```

https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-engine---community

## 기능명세

### USER

#### 회원가입 POST

#### 로그인 POST

#### 회원정보 GET

#### 특정유저검색 GET

#### 개인정보수정 PUT

#### 회원탈퇴 DELETE

### POST

#### 게시글작성 POST

#### 게시글수정 PUT

#### 게시글리스트 GET

#### 게시글검색 GET

#### 게시글삭제 DELETE

### COMMENT

#### 코멘트작성 POST

#### 코멘트수정 PUT

#### 코멘트리스트 GET

#### 코멘트삭제 DELETE

## API

---

auth

---

##### 로그인

###### curl -X POST localhost:8000/api/v1/auth/authenticate -d 'email=test@test.com&password=123123'

```
HTTP/1.1 200 OK
Content-Type: application/json
{}
```

##### OTP인증

###### curl -X POST localhost:8000/api/v1/auth/authorize -d 'email=test@test.com&otp=px32jwp3'

```
HTTP/1.1 200 OK
Content-Type: application/json
{}
```

##### JWT토큰갱신

###### curl -X POST localhost:8000/api/v1/auth/reauthorize -H 'Authorization: Bearer token' -d 'refresh_token=wef3r2f2wfwef'

```
HTTP/1.1 200 OK
Content-Type: application/json
{}
```

##### refresh_token 제거

###### curl -X POST localhost:8000/api/v1/auth/deauthorize -H 'Authorization: Bearer token' -d 'refresh_token=wef3r2f2wfwef'

```
HTTP/1.1 200 OK
Content-Type: application/json
{}
```

---

user

---

##### 회원가입

###### curl -X POST localhost:8000/api/v1/user -d 'email=test@test.com&password=123123&password_confirm=123123&username=kimyongkuk'

```
HTTP/1.1 201 OK
Content-Type: application/json
{}
```

##### 회원정보

###### curl localhost:8000/api/v1/user -H 'Authorization: Bearer token'

```
HTTP/1.1 200 OK
Content-Type: application/json
{}
```

##### 특정유저정보

###### curl localhost:8000/api/v1/user?search="kimyongkuk" -H 'Authorization: Bearer token'

```
HTTP/1.1 200 OK
Content-Type: application/json
{}
```

##### 개인정보수정

###### curl -X PUT localhost:8000/api/v1/user -H 'Authorization: Bearer token' -d 'password=124124'

```
HTTP/1.1 200 OK
Content-Type: application/json
{}
```

##### 회원탈퇴

###### curl -X DELETE localhost:8000/api/v1/user -H 'Authorization: Bearer token' -d 'password=124124'

```
HTTP/1.1 204 No Content
```

---

post

---
