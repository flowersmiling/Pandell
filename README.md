# Pandell
Please write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive).

# Running Server locally
## Prerequisites

First, ensure you have the following installed:

1. Node - Download and Install latest version of Node: [NodeJS](http://http://nodejs.org)
2. Npm - `npm install -g npm`
3. Express - `npm i express`

After that, use `Git bash` to run all commands if you are on Windows platform.

## Clone repository

In order to start the project use:

```bash
$ git clone https://github.com/flowersmiling/coding-exercise-backend.git
$ cd coding-exercise-backend
```

## Install dependencies

You'll need to download some node modules defined into `package.json` file.

```
npm install
```

## Build the app
Run the following command

```
npm build
```

This will generate a `dist` directory(JavaScript output files).

## Run the app

```
npm start
```

Now open your browser here: [http://localhost:3000/](http://localhost:3000/)

You'll have available the following `RESTful` services:

```
GET http://localhost:3000/tasks/doing
GET http://localhost:3000/tasks/done
POST http://localhost:3000/tasks
PUT http://localhost:3000/tasks/:id
DELETE http://localhost:3000/tasks
```

If you want to change the port, please update `index.ts` file.

## License

MIT
