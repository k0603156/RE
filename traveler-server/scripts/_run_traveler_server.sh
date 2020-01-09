# 네트워크생성
docker network create traveler_express_net
# 이미지 빌드
docker build -t traveler_image -f Dockerfile .
# 동일한 이름의 이전 컨테이너 제거
docker rm -f  $(docker ps -a | grep "traveler_container" | awk "{print \$1}")
# 지난 이미지 삭제
docker rmi -f $(docker images | grep "<none" | awk "{print \$3}")
# 컨테이너 생성
# docker run -itd --name traveler_container -p 80:80 --network traveler_express_net --restart unless-stopped traveler_image
docker run -itd --name traveler_container -p 80:80 --restart unless-stopped traveler_image

