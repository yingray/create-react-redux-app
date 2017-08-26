# [![Create React Redux App](readme/cover.png)](https://yingray.github.io/create-react-redux-app/)

[![Build Status](https://travis-ci.org/yingray/create-react-redux-app.svg?branch=master)](https://travis-ci.org/yingray/create-react-redux-app)
[![Coverage Status](https://coveralls.io/repos/github/yingray/create-react-redux-app/badge.svg?branch=master)](https://coveralls.io/github/yingray/create-react-redux-app?branch=master)

This project was bootstrapped with Create React App and Redux, Sass Structure.

Demo: [https://yingray.github.io/create-react-redux-app](https://yingray.github.io/create-react-redux-app/#/)

# Todo List

* react + redux sample practice

![demo](readme/demo.gif)

# fetch API

* Handle async event

* async/await + api-book sample practice

![demo-api](readme/demo-api.gif)

# Getting Started

## Dependencies

* React
  * react
  * react-dom

* Create React App
  * react-scripts

* Redux
  * redux
  * react-redux
  * react-router
  * react-router-redux
  * redux-thunk

* Sass
  * node-sass-chokidar

* Fetch
  * api-book
  * babel-polyfill

* Github Deployment Tool
    * gh-pages

## Installation

To create a new react-redux-sass app, run:

```sh
git clone https://github.com/yingray/create-react-redux-app.git ~/create-react-redux-app
cd ~/create-react-redux-app
# yarn or npm install
yarn
```

It will create a directory called **create-react-redux-app** inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
create-react-redux-app/
  src/
    actions/
      todoActions.js
      weatherActions.js
    components/
      App.js
      Header.js
      Link.js
      Navigation.js
      Todo.js
      TodoFooter.js
      TodoList.js
    constants/
      ActionTypes.js
    containers/
      AddTodo.js
      FilterLink.js
      VisibleTodoList.js
      Weather.js
    images/
      logo.svg
    pages/
      Home.js
      Todo.js
      Weather.js
    reducers/
      todos.js
      visibilityFilter.js
      weatherReducer.js
    services/
      weatherApi.js
    styles/
      base/
      components/
      config/
      layout/
      pages/
      utils/
      vendors/
      main.scss
    index.js
    registerServiceWorker.js
    routes.js
    store.js
  --
  tests/
    components/
      App.spec.js
    reducers/
      weatherReducer.spec.js
  --
  public/
    favicon.ico
    index.html
  --
  node_modules/
  .editorconfig
  package.json
  README.md
```

### Runs the app in development mode

```bash
npm start
```

Open `http://localhost:3000` to view it in the browser.

### Runs the test watcher in an interactive mode

```bash
npm test
```

By default, runs tests related to files changes since the last commit.

### Builds the app for production to the build folder:

```bash
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

Reference: https://github.com/facebookincubator/create-react-app

### Deploys the production to github.io page

Changes package.json

```js
"homepage": "http://{account_name}.github.io/{project_name}",
"scripts": {
  "predeploy": "npm run build"
}
```

And runs

```bash
npm run deploy
```

## MIT License

Copyright (c) 2016 Ying-Ray Lu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
