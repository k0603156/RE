#GAE DEAFULT Node.js 12에 맞춤
# From node:12
FROM node:12
# Maintainer
LABEL key="MAINTAINER" value="YongkukKim <syntax-err@kakao.com>" 
#update
RUN apt-get update
#workdir 생성, 지정
WORKDIR /home/traveler/
#패키지관련파일 복사
COPY ./package.json /home/traveler/package.json
COPY ./yarn.lock /home/traveler/yarn.lock
#패키지 설치
RUN npm i
#Express폴더 이동
COPY ./ /home/traveler/
#Express포트열기 80:80번 vm과 1대1매칭됨
EXPOSE 80
#환경변수
ENV NODE_ENV production
# ENTRYPOINT [ "./docker-entrypoint.sh" ]
#Express실행
CMD ["node","./bin/www"]
