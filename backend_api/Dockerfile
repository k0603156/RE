# From node:12
FROM node:12

# Maintainer
LABEL key="MAINTAINER" value="YongkukKim <syntax-err@kakao.com>" 

#workdir 생성, 지정
WORKDIR /home/service/

#update
RUN apt-get update 

#Yarn 설치
# RUN npm install --global yarn 
# node:12에 yarn이 설치 되어있는 듯 하다

#패키지관련파일 복사
COPY package.json /home/service/package.json
COPY yarn.lock /home/service/yarn.lock
COPY .sequelizerc /home/service/.sequelizerc

#엔트리포인트 스크립트 복사
COPY ./docker-entrypoint.sh     /home/service/docker-entrypoint.sh

#패키지 설치
RUN yarn

#파일 이동
COPY ./config/ /home/service/config/
COPY ./scripts/ /home/service/scripts/
COPY ./src/ /home/service/src/

# EXPOSE 80
ENTRYPOINT ["/bin/bash","./docker-entrypoint.sh" ]