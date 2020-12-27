
# Develop Locally

1. Install [Node.js and npm](https://nodejs.org/en/)

1. Install npm dependencies:
        npm install
1. Start the local development server:
        npm start

1. Open [http://localhost:3000/](http://localhost:3000/) in the browser

# Build With Docker

## BUILD 
docker build -t portfolio:latest .

## Run 
docker run -it --rm -p 3001:3000 -e REACT_APP_GITHUB_TOKEN="somelongtoken" portfolio

## Push to DockerHub 
docker login
docker images
docker tag bb38976d03cf mikehanson/portfolio:latest
docker push mikehanson/portfolio


## Contributing
Pull requests are welcome. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
