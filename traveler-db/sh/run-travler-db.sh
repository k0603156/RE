# 이미지 빌드
docker build -t traveler_db_image -f Dockerfile.db .
# 동일한 이름의 이전 컨테이너 제거
docker rm -f $(docker ps -a | grep "traveler_db_container" | awk "{print \$1}")
# 지난 이미지 삭제
docker rmi -f $(docker images | grep "<none" | awk "{print \$3}")
# 컨테이너실행
docker run --name traveler_db_container -itd -p 3306:3306 -e MYSQL_ROOT_PASSWORD=루트비밀번호자리\
#  -e MYSQL_DATABASE=traveler_db -e MYSQL_USER=traveler_user -e MYSQL_PASSWORD=비밀번호자리
-v /home/systemv/mysql/data/traveler_db_data/:/var/lib/mysql \
--restart unless-stopped traveler_db_image

# docker logos
# docker inspect mysql-server | grep -i "ipaddress"