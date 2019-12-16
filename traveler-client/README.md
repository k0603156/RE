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

##### modules

- prop-types
