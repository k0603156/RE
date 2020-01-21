###### Structure

###### Definition

`여행지 포스팅 앱`
`Traveler Client + SSR Server`

###### Preview

<img width="100%" src="https://user-images.githubusercontent.com/16025776/72452345-bec5a200-3800-11ea-9c45-1eb2bfa9cef4.jpg">

##### Document

1. [O] README.md clear
2. [O] yarn eject
3. [O] package.json 수정

   - dependencies devDependencies 분리
   - description, author, homepage 추가
   - browserslist 변경

     - [참고](https://github.com/browserslist/browserslist)
     - [참고](https://gs.statcounter.com/)

       ```
           $ npx browserslist
           ex
           $  npx browserslist '>0.25%,
               not ie 11,
               not op_mini all'

           현재 설정으로 지원되는 브라우저 확인
       ```

4. [O] tsconfig baseUrl추가
   ```
       "baseUrl": "./src"
   ```
5. [0] 전체 구조 잡기

##### Dependencies

- react-router-dom
- redux, react-redux, redux-saga
- axios
- lodash
- styled-components
