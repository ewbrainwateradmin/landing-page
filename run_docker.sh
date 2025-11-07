git pull

docker rm -f ewb
docker build -t ewb-rainwater-next .
docker run -d -p 3000:3000 --name ewb ewb-rainwater-next