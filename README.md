GCP
TypeScript 적용
redux-saga
Dockerizing
GCE에 Mysql 설치

gcloud설치
프로젝트생성
https://cloud.google.com/compute/docs/oslogin/setup-two-factor-authentication?hl=ko

##### gce 생성

https://cloud.google.com/solutions/setup-mysql?hl=ko
ubuntu 18.04
f1-micro(vCPU 1개, 0.6GB 메모리)
http,https
compute region:asia-northeast1-b

cd server
gcloud init

#### 이미지 Container registry로 내보내기

https://blusky10.tistory.com/369
gcloud auth configure-docker
docker tag traveler:1.0 asia.gcr.io/traveler-261702/traveler
docker push asia.gcr.io/traveler-261702/traveler
gcloud container images list-tags asia.gcr.io/traveler-261702/traveler

#### 쉘접속

gcloud compute ssh traveler

#### MySQL 설치

sudo apt-get update
sudo apt-get -y install mysql-server

mysql --version
mysql Ver 14.14 Distrib 5.7.28, for Linux (x86_64) using EditLine wrapper

#### MySQL 설치 보안 강화

https://dev.mysql.com/doc/refman/8.0/en/mysql-secure-installation.html
MySQL 설치의 보안을 강화하려면 mysql_secure_installation 명령어를 실행합니다. 설치 과정 중에 비밀번호를 설정하지 않은 경우 이 단계에서 비밀번호를 만듭니다. 이 명령어에 대한 자세한 내용은 MySQL 문서에서 mysql_secure_installation 부분을 참조하세요.

```
sudo mysql_secure_installation
```

초기비밀번호를 설정해줘야한다.

```
sudo mysql
use mysql;
select host,user,authentication_string from user;
update user set authentication_string='[dev#rich*life92]' where user='root';
flush privileges;
quit
```

#### 참고

https://cloud.google.com/nodejs/docs/tutorials/bookshelf-on-compute-engine?hl=ko
https://nodejs.org/ko/docs/guides/nodejs-docker-webapp/
https://cloud.google.com/compute/docs/containers/configuring-options-to-run-containers?hl=ko

##### 방화벽설정

https://gusrb.tistory.com/50
