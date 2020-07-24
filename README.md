# Project Introduction

This project will allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites to understand the written human language . we will use an external API called Aylien , that has put a public-facing API in front of their NLP system to interact with their NLP system. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.


# project technologies, languages, tools 

- HTML5
- SASS Styles
- JavaScript
- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack to have dev and prod environments, each with their own set of tools and commands.
- External script - Service Worker
- External API – [Aylien](https://docs.aylien.com/textapi/endpoints/#api-endpoints)


# project Scripts

```
"scripts": {
    "test": "jest",
    "start": "node src/server/index.js",
    "build-prod": "webpack --config webpack.prod.js",
    "build-dev": "webpack-dev-server --config webpack.dev.js --open"
  },
```

# Project Dependencies

```
"dependencies": {
    "aylien_textapi": "^0.7.0",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "node-fetch": "^2.6.0",
    "webpack": "^4.35.3",
    "webpack-cli": "^3.3.5"
  },
  "devDependencies": {
    "@babel/core": "^7.10.4",
    "@babel/plugin-transform-runtime": "^7.10.5",
    "@babel/preset-env": "^7.10.4",
    "babel-loader": "^8.1.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.6.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^26.1.0",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.14.1",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "sass-loader": "^9.0.2",
    "style-loader": "^1.2.1",
    "terser-webpack-plugin": "^3.0.7",
    "webpack-dev-server": "^3.11.0",
    "workbox-webpack-plugin": "^5.1.3"
  }

```


# Getting started

fork this repo and clone it on your local device, you will still need to install everything:

- `cd` into your new folder and run:
- `npm install`
- follow these steps :

## Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. 

## Step 2: Environment Variables
To make your keys private you need a way called environment variables. these variables only belong to your system and won't be visible when you push to a different environment like Github.
- [ ] Create a new ```.env``` file in the root of your project
- [ ] Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```

## Step 3: Project Running

- In terminal type this command
```
npm run build-prod
```
This will create a **dist** folder in your project root

- Open another terminal and type this command
```
npm run start
```
This will run your node server locally on your device at port 8081

- Open your browser and use this url http://localhost:8081/ , you will see our website, type url of any article in the text field then press submit , then you will get response from **_Aylien API_**

- If you want to make changes to our sourse code then type these commands in your terminal

```
npm run build-dev
```
so this will make webpack-dev-server run development mode

also you have to type this commanand to run your Node Server

```
npm run start
```

## Step 4: Using the API

The aylien API has a lot of different endpoints you can take a look at [here](https://docs.aylien.com/textapi/endpoints/#api-endpoints). And you can see how using the SDK simplifies the requests we need to make. 



