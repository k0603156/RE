## 기능명세

### USER

#### 회원가입 POST

#### 로그인 POST

#### 회원정보 GET

#### 특정유저검색 GET

#### 개인정보수정 PATCH

#### 회원탈퇴 DELETE

### POST

#### 게시글작성 POST

#### 게시글수정 PATCH

#### 게시글리스트 GET

#### 게시글검색 GET

#### 게시글삭제 DELETE

### COMMENT

#### 코멘트작성 POST

#### 코멘트수정 PATCH

#### 코멘트리스트 GET

#### 코멘트삭제 DELETE

## API

#### auth

로그인

##### curl -X POST localhost:8000/v1/auth/authenticate -d 'email=test@test.com&password=123123'

OTP인증

##### curl -X POST localhost:8000/v1/auth/authorize -d 'email=test@test.com&otp=px32jwp3'

JWT토큰갱신

##### curl -X POST localhost:8000/v1/auth/reauthorize -H 'Authorization: Bearer token' -d 'refresh_token=wef3r2f2wfwef'

refresh_token 제거

##### curl -X POST localhost:8000/v1/auth/deauthorize -H 'Authorization: Bearer token' -d 'refresh_token=wef3r2f2wfwef'

### user

회원가입

##### curl -X POST localhost:8000/v1/user -d 'email=test@test.com&password=123123&password_confirm=123123&username=kimyongkuk'

회원정보

##### curl localhost:8000/v1/user -H 'Authorization: Bearer token'

특정유저정보

##### curl localhost:8000/v1/user?search="kimyongkuk" -H 'Authorization: Bearer token'

개인정보수정

##### curl -X PATCH localhost:8000/v1/user -H 'Authorization: Bearer token' -d 'password=124124'

회원탈퇴

##### curl -X DELETE localhost:8000/v1/user -H 'Authorization: Bearer token' -d 'password=124124'

### post