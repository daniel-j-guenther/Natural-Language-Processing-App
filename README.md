# Udacity P4: Natural Languange Proccessing

## Overview

The goal of this project is all about build tools, acquiring the key skills needed to build and develop modern web applications.

Technologies I will be implimenting into this project include:
- HTML, CSS & JavaScript ([SASS](https://sass-lang.com/) & [ES6](http://es6-features.org/))
- [Node.js](https://nodejs.org/) (Express, JSON npm, etc.)
- [Webpack](https://webpack.js.org/) (Production & Development Enviroments)
- [MeaningCloud Sentiment Analysis API](https://www.meaningcloud.com/developer/sentiment-analysis) (for our Natural Language Processing)
- [Workbox](https://developers.google.com/web/tools/workbox) (Service Workers for Precaching & Runtime caching)

## Instructions

- Install Webpack and configure for automating build tasks.
- Define the entry point, install and configure middleware.
- Extend Webpack functionality with  loaders and plugins.
- Describe and explain the benefits and use cases for Sass.
- Create CSS variables with Sass.
- Extend and nest CSS sheets and classes with Sass.
- Configure Webpack to use Sass controlled stylesheets.
- Control variable and function scope with IIFEs (Immediately Invoked Function Expressions).
- Optimize an application build pipeline with Webpack.
- Cache server data and websites functionality using Service Worker.

To learn more visit Udacity's [Frontend Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) official page.

## Experiences

Synchronous `http.request`: A synchronous request blocks the client until operation completes. In such case, javascript engine of the browser is blocked.

Asynchronous `fetch` request: doesn’t block the client i.e. the browser remains responsive. At that time, user can perform another operations also. In such case, javascript engine of the browser is not blocked.

## Table of Contents

- p4-frontend-dev-nanodegree/src/client
- p4-frontend-dev-nanodegree/src/server
- p4-frontend-dev-nanodegree/.babelrc
- p4-frontend-dev-nanodegree/.gitignore
- p4-frontend-dev-nanodegree/package-lock.json
- p4-frontend-dev-nanodegree/package.json
- p4-frontend-dev-nanodegree/webpack.dev.js
- p4-frontend-dev-nanodegree/webpack.prod.js
- p4-frontend-dev-nanodegree/LICENSE
- p4-frontend-dev-nanodegree/README

## Install Notes

> npm install

  Installed to help suppress deprecated libraires:
> npm i fsevents@latest -f --save-optional
> npm i chokidar@latest -f --save-optional
> npm i postcss@^8.1.0

  Installed & necessary when running Webpack 4:
> npm i webpack-cli@latest webpack-dev-server@latest
> npm i @babel/core @babel/preset-env babel-loader
> npm i style-loader node-sass file-loader css-loader sass-loader
> npm i html-webpack-plugin@4 terser-webpack-plugin@4
> npm i mini-css-extract-plugin
> npm i optimize-css-assets-webpack-plugin

  Installed exclusively for our dev environment:
> npm i -D clean-webpack-plugin
> npm i -D webpack-bundle-analyzer

Installed for API, Jest & Workbox functionalities:
> npm i dotenv cors body-parser