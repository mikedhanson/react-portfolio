## Project Build

npm start

## Change start scripts
- "start": "react-scripts --openssl-legacy-provider start",
- "start": "react-scripts start",

## Docker Build

1. Launch docker
2. docker build -t react-portfolio .

## Run

docker run -it --rm -p 3001:3000 -e REACT_APP_GITHUB_TOKEN="" react-portfolio

## Push to docker

docker login
docker images
docker build -t imageName .
docker tag bb38976d03df mikehanson/react-portfolio:latest
docker push mikehanson/react-portfolio

## Pushing updates

docker login
docker images

## Push to github

1. git remote add origin https://github.com/mikedhanson/react-portfolio.git
2. git status
3. git add .
4. git commit -m 'commit message'
5. git push origin main

## Package.json Settings

### required for node 17

"scripts": {
"start": "react-scripts --openssl-legacy-provider start",

### Docker build node:10.16.0-alpine

"scripts": {
"start": "react-scripts start",
