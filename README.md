###### Structure

<img width="100%" src="https://user-images.githubusercontent.com/16025776/72450836-570e5780-37fe-11ea-98af-7822d1ddc76f.jpg">

###### Definition

`여행지 포스팅 앱`

###### Frontend

```
React
Webpack + Babel
TypeScript

STATE
>redux + redux-saga

STYLE
>styled-components

Test
>jest
>enzyme
```

###### Backend

```
Express

DATABASE
>Sequelize + MySql

AUTH
>passport + JWT

Test
>jest
>supertest
```

###### Platform + Devops + others

```
Google Cloud Plaform
>ComputedEngine
>CloudeSQL

Docker
```

###### Version Control

```
git github
https://github.com/k0603156/Traveler
```

##### Document

1.  GCP ComputedEngine 인스턴스 생성 후

    - [O] GIT 설치

      - [참고](https://thishosting.rocks/install-git-ubuntu/)

        ```
        First, update the system:
        $ sudo apt-get update
        $ sudo apt-get upgrade -y

        $ sudo apt-get install git

        $ git --version
        ```

    - [O] DOCKER 설치

      - [참고](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-engine---community)

            ```
            $ sudo apt-get remove docker docker-engine docker.io containerd runc

            $ sudo apt-get update

            https로 저장소에 접근하기위한 패키지 설치

            $ sudo apt-get install \
            apt-transport-https \
            ca-certificates \
            curl \
            gnupg-agent \
            software-properties-common

            Docker 공식 GPG 키

            $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

            $ sudo apt-key fingerprint 0EBFCD88

            레포지토리 추가

            $ sudo add-apt-repository \
            "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
            \$(lsb_release -cs) \
            stable"

            $ sudo apt-get update

            $ sudo apt-get install docker-ce docker-ce-cli containerd.io

            $ docker
            ```

            https://cloud.google.com/compute/docs/containers/?hl=ko

            .env같은파일은 안보일 수있으니 ls -a
            touch .env
            vi .env

            .sh 스크립트로 도커 컨테이너 생성시
            스크립트파일 실행권한 추가
            chmod +x filename
