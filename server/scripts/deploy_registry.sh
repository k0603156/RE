# GCP CONTAINER REGISTY 배포용 스크립트
gcloud auth configure-docker
docker tag traveler asia.gcr.io/traveler-261702/traveler
docker push asia.gcr.io/traveler-261702/traveler
gcloud container images list-tags asia.gcr.io/traveler-261702/traveler