###### Structure

###### Definition

`블로그 서비스`
`Symphonia API Server`

#### API

`여행서비스 연습용에서 문서 수정중`
<img width="30%" src="https://user-images.githubusercontent.com/16025776/72713055-ac0bee00-3baf-11ea-9e77-a62c08c1ce5f.jpg">

`api는 테스트 코드를 참고`

##### Document

https://docs.google.com/spreadsheets/d/19kUThYVtNJIqMl7_7TpXpOKg-yD5Gu7ke-_Utdf10H8/edit?usp=sharing

##### 설명

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
