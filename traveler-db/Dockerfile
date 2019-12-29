FROM mysql:8.0.18

ADD init.sql /sh/docker-entrypoint-initdb.d/

# pacakges
RUN apt-get update
RUN apt-get -y install vim


EXPOSE 3306

# 자동실행
# ENTRYPOINT ["/bin/bash","./docker-entrypoint.sh" ] 