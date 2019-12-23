docker stop $(docker ps -a | awk "{print \$1}")
docker rm -f $(docker ps -a | awk "{print \$1}")
docker rmi -f $(docker images | awk "{print \$3}")
docker system prune
docker system prune --volumes
docker container prune
docker image prune