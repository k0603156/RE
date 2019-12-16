1.  GCP

    - [O] GCE인스턴스생성

      ```
      ubuntu 18.04
      check http
      ```

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

            $ sudo apt-get install \
            apt-transport-https \
            ca-certificates \
            curl \
            gnupg-agent \
            software-properties-common

            $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

            $ sudo add-apt-repository \
            "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
            \$(lsb_release -cs) \
            stable"

            $ sudo apt-get update

            $ sudo apt-get install docker-ce docker-ce-cli containerd.io

            $ docker
            ```

2.  client

    - [O] ReactProject (typescript) 생성

    ```
        npx create-react-app traveler-client --template typescript
    ```

3.  server

    - [O] ExpressProject 생성

    ```
        express traveler-server
    ```
