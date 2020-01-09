# 네트워크생성 CSQL 사용으로 필요없음
# sudo docker network create traveler_express_net
# 이미지 빌드
sudo docker build -t traveler_image -f Dockerfile .
# 동일한 이름의 이전 컨테이너 제거
sudo docker rm -f  $(sudo docker ps -a | grep "traveler_container" | awk "{print \$1}")
# 지난 이미지 삭제
sudo docker rmi -f $(sudo docker images | grep "<none" | awk "{print \$3}")
# 컨테이너 생성
# docker run -itd --name traveler_container -p 80:80 --network traveler_express_net --restart unless-stopped traveler_image
sudo docker run -itd --name traveler_container -p 80:80 --restart unless-stopped traveler_image

# root로 docker 설치시 sudo 없이 도커를 실행하면 아래와 같은 에러가 발생
# Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http:
# //%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/json: dial unix /var/run/docker.sock: connect: permission denied