### Popular docker commands

```sh
# LIST ALL IMAGES
docker images

# DELETE IMAGE
docker rmi <IMAGE_NAME>

# BUILD IMAGE
docker build -t <NEW_IMAGE_NAME> . 

# RUN IMAGE AND CONNECT ON CONTAINER
docker run --rm --volume "/home/project-docker:/srv/app" --workdir "/srv/app" --publish 8080:8080 -it node:12 bash

# LIST CONTAINERS
docker ps 

# LIST ALL CONTAINERS
docker ps -a

# DELETE CONTAINER ID
docker rm <CONTAINER_ID> 

# CONNECT ON CONTAINER
docker exec -it <CONTAINER_ID> bash

# RUN DOCKER COMPOSE
docker-compose up 

# RUN DOCKER COMPOSE IN BACKGROUND
docker-compose up -d
```
