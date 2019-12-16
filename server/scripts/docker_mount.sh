# docker rm -f $(docker ps -a | grep traveler | awk "{print \$1}")

# 기존 컨테이너는 제거
docker rm -f traveler-container

# 컨테이너실행
docker run --name traveler-container -itd --restart no -p 8000:8000 traveler

# docker logos