###### Structure

###### Definition

`블로그 서비스`
`Symphonia API Server`

#### API

<img width="30%" src="https://user-images.githubusercontent.com/16025776/77004850-246e1000-69a3-11ea-9749-dddff8ccb4b9.jpg">

`api는 테스트 코드를 참고`

##### Document

- scripts/run.js production 실행 스크립트
- scripts/test.js test 실행 스크립트
  - 각 파일에서 프로세스 환경변수를 세팅
- src/index.js 는 development 실행 스크립트
  - 여기서는 프로세스 환경변수 세팅을 하지 않기 때문에 App/model에서 설정한 포트로 실행 됨
- 각각의 실행환경 별 스크립트에서 sequelize와 db를 sync한다. force: true일 경우 초기화를 강제한다.
- 스크립트에서 squelize sync 할 때 config를 읽어들인다.

#### 1단계

- server / user, post api
- client / 로그인,로그아웃,수정 포스팅,삭제,수정, 리스트
- react dist를 server/dist로
- 도커라이징
- db도 일단 컨테이너로 올려서 volume으로 관리
- GCP에 배포
