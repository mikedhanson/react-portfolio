# Develop Locally

### Install [Node.js and npm](https://nodejs.org/en/)

### Install npm dependencies:

```
npm install
```

### Start the local development server:

```
npm start
```

### Open [http://localhost:3000/](http://localhost:3000/) in the browser

# Build With Docker

## BUILD

```
docker build -t portfolio:latest .
```

## Run

```
docker run -it --rm -p 3001:3000 -e REACT_APP_GITHUB_TOKEN="somelongtoken" react-portfolio
```

## Push to DockerHub

```
docker login
docker images
docker tag bb38976d03cf mikehanson/portfolio:latest
docker push mikehanson/portfolio
```

# Updates

### NPM

```
npm install -g npm@(VERSION)
```

## Contributing

Pull requests are welcome.

## License

[MIT](https://choosealicense.com/licenses/mit/)
