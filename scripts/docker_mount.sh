# 이미지 빌드
docker build -t traveler:1.0 .

# 기존 컨테이너는 제거
docker rm -f traveler:1.0-container

# 컨테이너실행
docker run --name traveler:1.0-container -itd --restart no -p 8000:8000 traveler:1.0