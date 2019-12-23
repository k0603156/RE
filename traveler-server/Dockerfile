# From node:12
FROM node:12
# Maintainer
LABEL key="MAINTAINER" value="YongkukKim <syntax-err@kakao.com>" 
#update
RUN apt-get update
#Yarn 설치
RUN npm install --global yarn
#workdir 생성, 지정
WORKDIR /home/traveler/
#패키지관련파일 복사
COPY ./package.json     /home/traveler/package.json
COPY ./yarn.lock        /home/traveler/yarn.lock
COPY ./docker-entrypoint.sh     /home/traveler/docker-entrypoint.sh
#패키지 설치
RUN yarn
#Express폴더 이동
COPY ./ /home/traveler/
#Express에서 사용할 포트
EXPOSE 8000
#환경변수
ENV NODE_ENV production
# ENTRYPOINT [/bin/"bash", "./docker-entrypoint.sh" ]
ENTRYPOINT ["/bin/bash","./docker-entrypoint.sh" ]
#Express실행
# CMD ["ts-node","./src/bin/www.ts"]
